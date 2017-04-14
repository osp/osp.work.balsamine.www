from pelican import signals
from pelican.readers import METADATA_PROCESSORS
from pelican.utils import get_date


def add_metadata_processors(arg):
    METADATA_PROCESSORS['start_date'] = lambda x, y: get_date(x.replace('_', ' '))
    METADATA_PROCESSORS['end_date'] = lambda x, y: get_date(x.replace('_', ' '))


def register():
    signals.initialized.connect(add_metadata_processors)
