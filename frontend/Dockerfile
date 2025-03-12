FROM node:20 AS build

RUN apt-get update && apt-get install -y build-essential

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force && npm install --production --legacy-peer-deps

COPY . .

RUN npm run build

FROM nginx:1.23

COPY --from=build /app/dist /usr/share/nginx/html

COPY ./frontend/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80