FROM node:alpine

COPY ./aci-helloworld/* /usr/src/app/

WORKDIR /usr/src/app

RUN npm install

CMD ["node", "index.js"]