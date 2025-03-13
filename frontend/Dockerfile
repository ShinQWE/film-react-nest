FROM node:20 AS build

RUN apt-get update && apt-get install -y build-essential git

WORKDIR /app

COPY ./frontend/package*.json ./

RUN npm install --production --legacy-peer-deps

COPY ./frontend ./

RUN npm run build || cat /root/.npm/_logs/*.log

RUN ls -la /app

FROM nginx:1.23

COPY --from=build /frontend/dist /usr/share/nginx/html

COPY ./frontend/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80