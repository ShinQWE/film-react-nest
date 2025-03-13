FROM node:20 AS build

RUN apt-get update && apt-get install -y build-essential git

WORKDIR /app

COPY package*.json ./

RUN pwd

RUN npm install --production --legacy-peer-deps || (cat /root/.npm/_logs/*.log && exit 1)

RUN pwd

RUN npm run build || cat /root/.npm/_logs/*.log

RUN pwd

FROM nginx:1.23

COPY --from=build /app/dist /usr/share/nginx/html

COPY ./frontend/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80