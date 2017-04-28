#!/usr/bin/env bash


for gly in svg/simple/*.svg;
do

  file=`basename $gly .svg`
  cp $gly svg/simple/clean/
  inkscape \
    --verb EditSelectAllInAllLayers \
    --verb SelectionUnGroup \
    --verb StrokeToPath \
    --verb SelectionUnion \
    --verb FileSave \
    --verb FileClose \
    --verb FileQuit \
  svg/simple/clean/$file.svg

  # echo $file
  # inkscape $gly --export-ps="simple/$file.ps"
  # # inkscape "simple/$file.eps" --export-plain-svg="simple/$file.svg"
  # # rm simple/$file.esp
done


