#!/usr/bin/env bash

files_to_lint=$(git diff --cached --name-only --diff-filter=ACM | grep -E '^src\/.*\.jsx?$')

if [ -n "$files_to_lint" ]; then
  ./node_modules/.bin/eslint --format 'node_modules/eslint-friendly-formatter' $files_to_lint
fi
