#!/bin/bash

cd mysql
docker build -t leilaalgarve/mysqldesafio:prod -f Dockerfile.prod .

cd ../node
docker build -t leilaalgarve/nodedesafio:prod -f Dockerfile.prod .

cd ../ningx
docker build -t leilaalgarve/nginxdesafio:prod -f Dockerfile.prod .

cd ..