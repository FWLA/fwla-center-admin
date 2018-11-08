# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:11.1.0-alpine

LABEL maintainer="benjamin.ihrig@gmail.com"

RUN npm install -g serve

ADD ./build ./build

EXPOSE 5000

ENTRYPOINT [ "serve", "-s", "build" ]
