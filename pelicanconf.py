#!/usr/bin/env python
# -*- coding: utf-8 -*- #

from __future__ import unicode_literals

from mdx_figcaption import FigcaptionExtension
from mdx_outline import OutlineExtension


# Default author (usually your name).
AUTHOR = u'Balsamine'

# Your site name
SITENAME = u'Balsamine'

# Base URL of your website. Not defined by default, so it is best to specify
# your SITEURL; if you do not, feeds will not be generated with properly-formed
# URLs. You should include `http://` and your domain, with no trailing slash at
# the end. Example: `SITEURL = 'http://mydomain.com'`
#  SITEURL = 'http://balsamine.be'
SITEURL = ''

# Path to content directory to be processed by Pelican. If undefined, and
# content path is not specified via an argument to the `pelican` command,
# Pelican will use the current working directory.
PATH = 'content'


TIMEZONE = 'Europe/Paris'

DEFAULT_LANG = u'fr'

THEME = "theme/balsamine"
#  CSS_FILE = 'screen.css'
CSS_FILE = 'balsa.css'

# Whether to display categories on the menu of the template. Templates may or
# not honor this setting.
DISPLAY_CATEGORIES_ON_MENU = False

# Whether to display pages on the menu of the template. Templates may or may
# not honor this setting.
DISPLAY_PAGES_ON_MENU = True


ARTICLE_ORDER_BY = 'date'


# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 100

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True

# Global metadata to all the contents
DEFAULT_METADATA = {'color': '#CCCCCC'}


# Extends pelican for our specific needs
PLUGINS = [
    'minchin.pelican.plugins.image_process',
    'pelican_balsa',
]

# URL settings
ARTICLE_URL = '{category}/{slug}.html'
ARTICLE_SAVE_AS = '{category}/{slug}.html'
PAGE_URL = '{slug}.html'
PAGE_SAVE_AS = '{slug}.html'
# CATEGORY_URL = '{slug}.html'
# CATEGORY_SAVE_AS = '{slug}.html'


#  def tac_filter(value):
#      return value[::-1]

#  JINJA_FILTERS = {'tac': tac_filter }

# Extra configuration settings for the Markdown processor. Refer to the Python
# Markdown documentation’s Options section for a complete list of supported
# options. The extensions option will be automatically computed from the
# extension_configs option.


MARKDOWN = {
    'extensions': [
        FigcaptionExtension(),
        OutlineExtension({"wrapper_tag": "div", "wrapper_cls": 'level%(LEVEL)d'})
    ],
    'extension_configs': {
        'markdown.extensions.extra': {},
        'markdown.extensions.meta': {},
        'markdown.extensions.toc': {"anchorlink": True}
        #  'markdown.extensions.attr_list': {},
    },
    'output_format': 'html5',
}

# A list of metadata fields containing reST/Markdown content to be parsed and
# translated to HTML.
# FORMATTED_FIELDS = ['summary']

# See <https://github.com/MinchinWeb/minchin.pelican.plugins.image_process> for
# configuration options
IMAGE_PROCESS = {
    'timeline': ["scale_in 420 9999 True"],
    'thumbnail': ["scale_in 70 9999 True"],
    #  'crisp': {
    #      'type': 'responsive-image',
    #      'srcset': [
    #          ('1x', ["scale_in 800 600 True"]),
    #          ('2x', ["scale_in 1600 1200 True"]),
    #          ('4x', ["scale_in 3200 2400 True"]),
    #      ],
    #      'default': '1x',
    #  },
    #  'large-photo': {
    #      'type': 'responsive-image',
    #      'sizes': '(min-width: 1200px) 800px, (min-width: 992px) 650px, \
    #                (min-width: 768px) 718px, 100vw',
    #      'srcset': [
    #          ('600w', ["scale_in 600 450 True"]),
    #          ('800w', ["scale_in 800 600 True"]),
    #          ('1600w', ["scale_in 1600 1200 True"]),
    #      ],
    #      'default': '800w',
    #  },
}

IGNORE_FILES = ["*.swo", "*.swp"]


# Fixes slow generation caused by overzealous copying of images
# Requires patched version of Pelican (see requirements.txt), at
# <https://github.com/aleray/pelican>
STATIC_CHECK_IF_MODIFIED = True
