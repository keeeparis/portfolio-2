#!/usr/bin/env sh

set -e

if [ -d "/dist" ]
then 
    rm dist -r
else
    echo "folder dist does not exist"
fi

npm run build

cd dist

git init 
git checkout -b main
git add -A

git config --local user.email "vladimir1trotsenko@gmail.com"
git config --local user.name "Keeeparis"

git commit -m 'deploy'

# git push -f git@github.com:keeeparis/portfolio-2.git main:gh-pages

cd -