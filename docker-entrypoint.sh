#!/bin/sh
set -e
# Build the app, and move to server folder.
cd ..; yarn build; cp -a build/. server/public/
exec "$@"
