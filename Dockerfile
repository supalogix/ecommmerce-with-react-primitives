FROM node:6.9.5

ENV HOME=/code
RUN mkdir -p /code
WORKDIR /code
ADD . /code

RUN npm install -g -s yarn
RUN npm install -g -s lerna
RUN npm install -g -s babel-cli
RUN npm install -g -s mocha 
RUN npm install -g -s chai