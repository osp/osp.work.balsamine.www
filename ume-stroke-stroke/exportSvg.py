#! /usr/bin/python

import fontforge
font = fontforge.open("ume-p-gothic_balsa-webfont.woff")
for glyph in font:
  if font[glyph].unicode != -1:
    font[glyph].glyphname = fontforge.nameFromUnicode (font[glyph].unicode, "AGL without afii")
