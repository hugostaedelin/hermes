FROM node:17.9.1-alpine as dev

WORKDIR /api

COPY package.json .
COPY . .

RUN yarn add @nestjs/cli
RUN yarn install

EXPOSE 3000

CMD yarn start:dev

FROM node:17.9.1-alpine as prod

WORKDIR /api

COPY package.json .
COPY . .

RUN yarn add @nestjs/cli

EXPOSE 3000

CMD nest start --exec "yarn start:prod"

