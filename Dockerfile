FROM node:16.16.0

ARG SERVER_BASE_URL

ENV SERVER_BASE_URL=$SERVER_BASE_URL

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .
RUN yarn build
EXPOSE 3000
CMD [ "yarn", "start" ]
