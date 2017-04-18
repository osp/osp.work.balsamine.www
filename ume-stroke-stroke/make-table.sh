#!/usr/bin/env bash

rm js/table.js
echo 'var table = []' > js/table.js

for glyph in svg/*.svg;
do
  IFS=.
  set $glyph
  LETTER_=$1
  IFS=/
  set $LETTER_
  LETTER=$2
  IFS=

  echo 'table["'$LETTER'"] = "'$LETTER'";' >> js/table.js
  echo 'table["'$LETTER'"] = "'$LETTER'";'
done
