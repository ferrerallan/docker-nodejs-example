# docker-nodejs-example
A simple application how-to build and run nodejs with docker

- to build
docker build -t teste/node-web-app:2 .

- to run 
docker run -p 7000:8080 -d teste/node-web-app:2