#!/usr/bin/env sh

#abort on errors
set -e

#build 
npm run build

#navigate somewhere
cd dist

#do some stuff
echo > .nojekyll

git init
git checkout -B main
git add -A
git commit -m deploy

git push -f git@github.com:4ebupel/zip-code-data-searcher.git main:gh-pages

cd -