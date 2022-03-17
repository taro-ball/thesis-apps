#!/bin/bash
# tar -cvzf app.tar.gz app/
apphash=xpss`git rev-parse --short HEAD`
zip -r ${apphash}.zip *.j* node_modules/*
docker build -t taroball/taro1:${apphash} .
docker push taroball/taro1:${apphash}