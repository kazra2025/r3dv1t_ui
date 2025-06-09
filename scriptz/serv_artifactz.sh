#!/bin/bash
set -e

clear
REPO_ROOT=$(git rev-parse --show-toplevel)
cd $REPO_ROOT
# printf "pwd: $(pwd)\n\n"

# ord('r') + ord('v') = 114 + 118 = 232
# use 23280 for api
# use 23281 for ui

python3 -m http.server 23281 --bind 127.0.0.1 --directory ./artifactz/


