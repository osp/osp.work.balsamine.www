#!/usr/bin/env bash

string=$(cat input.txt)
ii=0
while printf "%s%n" "${string:ii++:1}" xx; do
	((xx)) && printf "'," || break
done > output.txt


