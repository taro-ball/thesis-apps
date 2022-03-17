#!/bin/bash
# tar -cvzf app.tar.gz app/
apphash=flsk`git rev-parse --short HEAD`
zip -r ${apphash}.zip *.py *.txt
docker build -t taroball/taro1:${apphash} .
docker push taroball/taro1:${apphash}