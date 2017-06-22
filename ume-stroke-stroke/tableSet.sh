#!/usr/bin/env bash

num=0

echo 'var tableSet = [];' > js/tableSet.js


for glyph in SVG-MASTER/condensed/*.svg; do
  file=`basename $glyph .svg`
  echo $num
  echo 'tableSet['$num'] = "'$file'";' >> js/tableSet.js

  num=$((num+1))
  #statements
done
