#!/usr/bin/env sh

# abort on errors
set -e

cd .output

#git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/Jozaguts/golgol.git master:deploy

cd -
rm -rf /.output
