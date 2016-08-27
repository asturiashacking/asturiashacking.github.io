FROM ubuntu:xenial

RUN mkdir /asturiashacking
WORKDIR /asturiashacking
ADD . /asturiashacking

RUN apt-get update
RUN apt-get install -y hugo
