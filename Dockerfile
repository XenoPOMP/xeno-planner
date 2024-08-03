FROM node:20.11.1-slim

RUN npm i -g yarn

COPY . .

CMD [ "yarn", "deploy" ]