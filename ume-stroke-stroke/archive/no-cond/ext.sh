#!/usr/bin/env bash


for glyph in simple/*.svg; do
  file=`basename $glyph .svg`

  inkscape --verb EditSelectAllInAllLayers \
          --verb SelectionGroup \
  $glyph
  echo $file

done


