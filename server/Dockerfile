FROM node:10.16-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn

COPY . .

ENV MONGO_URI=mongodb://mongo:27017/cinema
ENV MONGO_DB_NAME=cinema

EXPOSE 5000

CMD [ "yarn", "start" ]