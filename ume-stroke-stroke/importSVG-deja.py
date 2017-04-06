# /usr/bin/env python2

import fontforge
import glob
import sys

SVG_DIR = glob.glob('svg-test/*.svg')
font = fontforge.open('tmp/DejaVuSans.sfd')

for glyph in SVG_DIR:
    letter = glyph.split("/")[-1].replace(".svg", "")
    letter_char= font.createMappedChar(letter)
    letter_char.importOutlines(glyph)

font.generate('FINAL/deja.sfd')
