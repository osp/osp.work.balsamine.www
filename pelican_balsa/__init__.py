import os
from pelican import signals
from pelican.readers import METADATA_PROCESSORS
from pelican.utils import get_date
import subprocess, shlex


def add_metadata_processors(arg):
    METADATA_PROCESSORS['end_date'] = lambda x, y: get_date(x.replace('_', ' '))


def test(pelican):
    for dirpath, _, filenames in os.walk(pelican.settings['OUTPUT_PATH']):
        for name in filenames:
            if os.path.splitext(name)[1] in ('.css',):
                filepath = os.path.join(dirpath, name)
                print(name)
                #  logger.info('minifiy %s', filepath)
                #  verbose = '-v' if SHOW_OUTPUT else ''
                #  call("yuicompressor {} --charset utf-8 {} -o {}".format(
                #      verbose, filepath, filepath), shell=True)

def process_css(pelican):
    cssfile = str(pelican.settings['OUTPUT_PATH'] + '/theme/css/' + pelican.settings['CSS_FILE'])
    cssout = str(pelican.settings['OUTPUT_PATH'] + '/theme/css/post-' + pelican.settings['CSS_FILE'])
    cmd = str("postcss " + cssfile + " -m --output " + cssout)
    call_params = shlex.split(cmd)
    subprocess.call(call_params)

def register():
    signals.initialized.connect(add_metadata_processors)
    signals.finalized.connect(process_css)
