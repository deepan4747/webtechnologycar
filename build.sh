#!/bin/bash
docker build -t task37 .
echo Hyyy
docker login -u deepan47 -p Deepan11032004
docker tag task37 deepan47/finaltask
docker push deepan47/finaltask
kubectl apply -f  deploy.yaml --validate=false
kubectl apply -f svc.yaml --validate=false
