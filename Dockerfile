FROM node:11-alpine

WORKDIR /app
COPY package.json yarn.lock /app/

RUN yarn install

RUN mkdir -p /app/dist
COPY ./dist /app/dist

EXPOSE 8080

CMD [ "node", "dist/server-app/main" ]
