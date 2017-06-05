#!/usr/bin/env bash


for gly in SVG-GENERATED/rotate/*.svg;
do

  file=`basename $gly .svg`
  cp $gly FINAL/
  inkscape \
    --file $gly \
    --verb EditSelectAllInAllLayers \
    --verb SelectionUnGroup \
    --verb StrokeToPath \
    --verb SelectionUnion \
    --export-plain-svg FINAL/$file.svg
    --verb FileClose \
    --verb FileQuit \


  # echo $file
  # inkscape $gly --export-ps="simple/$file.ps"
  # # inkscape "simple/$file.eps" --export-plain-svg="simple/$file.svg"
  # # rm simple/$file.esp
done


