import shlex
import subprocess

from pelican import signals, contents
from pelican.readers import METADATA_PROCESSORS
from pelican.utils import get_date

import html5lib
from html5lib.filters.base import Filter

import random


def add_metadata_processors(arg):
    METADATA_PROCESSORS['end_date'] = METADATA_PROCESSORS.get('end_date', METADATA_PROCESSORS.get('date'))
    METADATA_PROCESSORS['end_date'] = lambda x, y: get_date(x.replace('_', ' '))


def process_css(pelican):
    path = str(pelican.settings['OUTPUT_PATH'] + '/theme/css/' + pelican.settings['CSS_FILE'])
    cmd = "./node_modules/.bin/postcss --map --use postcss-cssnext --output {} {}".format(path, path)

    call_params = shlex.split(cmd)
    subprocess.call(call_params)


def obfuscate(value):
    #  return value[::-1]
    # get args.email and transform char in list of ascii code
    ascii_char_list = list(ord(char) for char in list(value))

    # lambda function to transform ascii to html ascii entity
    # randomly keep ascii in decimal or return ascii hex
    transform = lambda s: random.choice(
                    ('&#' + str(s) + ';', str(hex(s)).replace('0', '&#', 1) + ';'))

    return ''.join(list(map(transform, ascii_char_list)))


class ObfuscateEmailsFilter(Filter):
    def __iter__(self):
        for token in Filter.__iter__(self):
            if token["type"] == "StartTag" and token['name'] == "a":
                href = token["data"][(None, 'href')]

                if href.startswith("mailto:"):
                    obfuscated = obfuscate(href[7:])
                    href = "mailto:{}".format(obfuscated)
                    token["data"][(None, 'href')] = href

            yield token


def obfuscate_emails(content):
    if isinstance(content, contents.Static):
        return

    dom = html5lib.parseFragment(content._content, treebuilder="etree")
    walker = html5lib.getTreeWalker("etree")
    stream = walker(dom)
    stream = ObfuscateEmailsFilter(stream)
    s = html5lib.serializer.HTMLSerializer(quote_attr_values="always", omit_optional_tags=False)
    content._content = s.render(stream)


def register():
    signals.initialized.connect(add_metadata_processors)
#    signals.content_object_init.connect(obfuscate_emails)
    signals.finalized.connect(process_css)
