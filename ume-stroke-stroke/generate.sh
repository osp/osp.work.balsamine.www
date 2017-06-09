#!/usr/bin/env bash

font=$1
echo $font
rm -f tmp/path/*.svg

for gly in SVG-GENERATED/master-expanded/*.svg;
do
  file=`basename $gly .svg`
  cp $gly tmp/path/

  inkscape --verb EditSelectAllInAllLayers \
          --verb SelectionUnGroup \
          --verb StrokeToPath \
          --verb SelectionUnion \
          --verb FileSave \
          --verb FileClose \
          --verb FileQuit \
  tmp/path/$file.svg \

  # echo $file

  # inkscape $gly --export-ps="simple/$file.ps"
  # # inkscape "simple/$file.eps" --export-plain-svg="simple/$file.svg"
  # # rm simple/$file.esp
done


