FROM node:20 AS build

RUN apt-get update && apt-get install -y build-essential git

WORKDIR /app

COPY . .

RUN pwd

RUN npm install

RUN pwd

RUN npm run build 

RUN pwd

FROM nginx:1.23

COPY --from=build ./dist /usr/share/nginx/html

RUN pwd

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80