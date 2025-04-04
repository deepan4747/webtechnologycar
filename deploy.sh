#!/bin/bash
echo hi123
chmod +x build.sh
./build.sh
docker login -u deepan47 -p Deepan11032004
# Use non-interactive login
echo "Deepan11032004" | docker login -u "deepan47" --password-stdin

# Tag and push the image
docker tag finaltask deepan47/finaltask
docker push deepan47/finaltask

docker run -d -p 8009:80 --name=my-service-repo deepan47/finaltask
docker pull deepan47/finaltask
