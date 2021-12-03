#!/bin/bash
# tar -cvzf app.tar.gz app/
zip -r app`git rev-parse --short HEAD`.zip app