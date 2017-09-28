set -e

if [[ -z $1 ]]; then
  echo "Enter new version: "
  read VERSION
else
  VERSION=$1
fi

read -p "Releasing $VERSION - are you sure? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo "Releasing $VERSION ..."

  # build plugin
  VERSION=$VERSION npm run plugin

  # commit
  git add -f \
    dist/*
  git commit -m "build: build $VERSION"
  npm version $VERSION --message "build: release $VERSION"

  # push
  git push origin refs/tags/v$VERSION
  git push

  # publish
  # npm publish
fi
