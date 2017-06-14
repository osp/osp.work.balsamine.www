#! /usr/bin/env bash

# ./node_modules/.bin/postcss --use stylefmt --use postcss-sorting --postcss-sorting.sort-order yandex --use postcss-single-line --no-map --output theme/balsamine/static/css/balsa.css theme/balsamine/static/css/balsa.css

read -p "You are about to override $1. Are you sure? " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
    # do dangerous stuff
    ./node_modules/.bin/postcss --map --replace $1
fi
