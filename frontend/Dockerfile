FROM node:20 AS build

RUN apt-get update && apt-get install -y build-essential git

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build 

FROM nginx:latest

COPY --from=build /app/build /usr/share/nginx/html
