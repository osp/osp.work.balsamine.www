import shlex
import subprocess

from pelican import signals
from pelican.readers import METADATA_PROCESSORS
from pelican.utils import get_date


def add_metadata_processors(arg):
    METADATA_PROCESSORS['end_date'] = lambda x, y: get_date(x.replace('_', ' '))


def process_css(pelican):
    path = str(pelican.settings['OUTPUT_PATH'] + '/theme/css/' + pelican.settings['CSS_FILE'])
    cmd = "./node_modules/.bin/postcss --map --use postcss-cssnext --output {} {}".format(path, path)

    call_params = shlex.split(cmd)
    subprocess.call(call_params)


def register():
    signals.initialized.connect(add_metadata_processors)
    signals.finalized.connect(process_css)
