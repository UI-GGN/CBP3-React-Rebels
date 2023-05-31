#!/bin/sh

set -e 

docker build -t send-api-scanner -f Dockerfile . || exit 1
docker run send-api-scanner || exit 1
