FROM node:latest

WORKDIR /usr/src/app

COPY package.json .

RUN npm install -g npm@7.11.2

COPY . .

EXPOSE 3000

CMD ["npm", "start"]