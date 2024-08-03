FROM node:alpine

COPY package.json package.json
RUN npm i -g yarn

COPY . .

CMD [ "yarn", "deploy" ]