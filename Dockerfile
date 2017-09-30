FROM ubuntu:xenial

RUN apt-get update
RUN apt-get install -y hugo nodejs npm

RUN ln -s /usr/bin/nodejs /usr/bin/node

RUN npm -g install gulp-cli gulp-postcss postcss-import postcss-cssnext cssnano

RUN mkdir /asturiashacking
WORKDIR /asturiashacking
ADD . /asturiashacking
