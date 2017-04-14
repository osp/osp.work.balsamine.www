#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals


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
CSS_FILE = 'screen.css'

# Whether to display categories on the menu of the template. Templates may or
# not honor this setting.
DISPLAY_CATEGORIES_ON_MENU = False

# Whether to display pages on the menu of the template. Templates may or may
# not honor this setting.
DISPLAY_PAGES_ON_MENU = True

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
PLUGINS = ['pelican_balsa',]
