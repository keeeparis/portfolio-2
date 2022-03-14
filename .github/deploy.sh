#!/usr/bin/env sh

set -e

rm dist -r
npm run build

cd dist

git init 
git checkout -b main
git add -A
git commit -m 'deploy'

git push -f git@github.com:keeeparis/portfolio-2.git main:gh-pages

cd -