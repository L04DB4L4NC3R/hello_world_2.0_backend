FROM node:alpine

WORKDIR /usr/src/app

COPY package.json package.json

RUN npm install && npm install -g dotenv

COPY . . 

EXPOSE 3000

CMD ["npm","start"]