# /usr/bin/env python2

import fontforge
import glob
import sys
from math import radians
FontName = sys.argv[1]
SVG_DIR = glob.glob('SVG-GENERATED/'+FontName+'/*.svg')
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
    # letter_char.stroke("eliptical",60,40,radians(-30.0),"square","round")
    # letter_char.stroke("circular", 1 , 'butt' , 'miter' ,'cleanup')
    # letter_char.addExtrema('flags')
    # letter_char.simplify(10)
    # letter_char.square()
# font.selection.all()
# font.addExtrema();
# font.butt()
# font.simplify();
# font.butt()
# font.removeOverlap();
# font.butt()
# font.simplify();
# font.butt()
# font.addExtrema();
# font.butt()
font.fontname = 'ume-stroke-stroke-'+FontName
font.familyname = 'ume-stroke-stroke-'+FontName
font.generate('FINAL/ume-stroke-stroke-'+FontName+'.otf')

print(FontName)
