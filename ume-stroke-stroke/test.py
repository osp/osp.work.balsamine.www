# /usr/bin/env python2

import fontforge
import glob
import sys
from math import radians
FontName = sys.argv[1]
SVG_DIR = glob.glob('SVG-GENERATED/'+FontName+'/*.svg')
font = fontforge.open('tmp/ume-gothic.sfd')
line_chasse = '<svg '

for glyph in SVG_DIR:
    letter = glyph.split("/")[-1].replace(".svg", "")
    print(letter)
    svg_file = open(glyph, "r")
    for ligne in svg_file:
        if line_chasse in ligne:
            chasse = ligne.split('width="')[-1].split('" height="')[-2]
            # val_chasse = (float(val_chasse) / 2) / 1.075
            print('la valeur des de', chasse)
    svg_file.close()


    zone = font[letter]
    # chasse = zone.width
    zone.clear()
    letter_char = font.createMappedChar(letter)
    letter_char.width = int(chasse)
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
