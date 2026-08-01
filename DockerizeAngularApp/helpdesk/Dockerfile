# first stage
FROM node:current-alpine3.24 AS build
RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build 

# scond stage
FROM nginx:stable-alpine3.24-perl

COPY --from=build /app/dist/helpdesk/browser  /usr/share/nginx/html
