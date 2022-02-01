#!/bin/bash
# tar -cvzf app.tar.gz app/
apphash=app`git rev-parse --short HEAD`
cd app
npm install --only=production
cd ..
zip -r ${apphash}.zip app
docker build -t taroball/taro1:${apphash} .
docker push taroball/taro1:${apphash}