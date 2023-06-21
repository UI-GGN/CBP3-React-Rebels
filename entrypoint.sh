#!/bin/sh -l

set -e

sh -c "git config --global --add safe.directory $PWD"
sh -c "echo $* | /talisman --githook pre-push"