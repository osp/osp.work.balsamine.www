#! /usr/bin/env bash

./node_modules/.bin/postcss --use stylefmt --use postcss-sorting --postcss-sorting.sort-order yandex --use postcss-single-line --no-map --output theme/balsamine/static/css/balsa.css theme/balsamine/static/css/balsa.css
