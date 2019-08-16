#!/bin/sh

# install yarn if not exists
# npm install yarn -g

# use taobao source if our server inside the GFW
# yarn config set registry https://registry.npm.taobao.org

yarn --frozen-lockfile --non-interactive

yarn build
