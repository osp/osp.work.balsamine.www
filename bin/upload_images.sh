#! /usr/bin/env bash

rsync -avzx --progress --stats --rsh='ssh -p3265' content/images/shows/ balsamine@balsamine.be:/srv/balsa_restore/be.balsamine.new/app/content/images/shows
