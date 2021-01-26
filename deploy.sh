#!/bin/bash
docker stop nongnghiep
docker container rm nongnghiep
docker build --network=host -t nongnghiep .
docker run -e NODE_ENV=develop -d -it --rm --net=host --name nongnghiep -p 3010:8080 nongnghiep:latest
