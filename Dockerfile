FROM node:18.16.0-alpine as fibervt-build
WORKDIR /
COPY package.json yarn.lock ./
RUN yarn
COPY ./public ./public
COPY ./src ./src
ENV REACT_APP_baseAPIURL=localhost:5000
RUN yarn build

