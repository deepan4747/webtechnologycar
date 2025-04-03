#!/bin/bash
chmod +x build.sh
./build.sh
docker login -u deepan47 -p Deepan11032004
docker tag car-app deepan47/car-app
docker push deepan47/car-app
