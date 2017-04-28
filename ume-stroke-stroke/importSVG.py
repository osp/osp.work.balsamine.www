# /usr/bin/env python2

import fontforge
import glob
import sys

SVG_DIR = glob.glob('svg/simple/clean/*.svg')
font = fontforge.open('tmp/ume-gothic.sfd')

for glyph in SVG_DIR:
    letter = glyph.split("/")[-1].replace(".svg", "")
    print(letter)
    zone = font[letter]
    chasse = zone.width
    zone.clear()
    letter_char = font.createMappedChar(letter)
    letter_char.width = chasse
    letter_char.importOutlines(glyph)

#     letter = glyph.split("/")[-1].replace(".svg", "")
#     letter_char= font.createMappedChar(letter)
#     letter_char.width = 600
#     letter_char.importOutlines(glyph)
font.fontname = 'ume-stroke-stroke'
font.familyname = 'ume-stroke-stroke'
font.generate('FINAL/ume-stroke-stroke-v1.sfd')
