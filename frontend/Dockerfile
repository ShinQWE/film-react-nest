FROM node:20 AS build

# Установка необходимых пакетов
RUN apt-get update && apt-get install -y build-essential git

WORKDIR /app

# Копируем package.json и package-lock.json
COPY ./frontend/package*.json ./

# Установка зависимостей
RUN npm install --production --legacy-peer-deps

# Копируем остальные файлы
COPY ./frontend ./

# Выполняем сборку
RUN npm run build || cat /root/.npm/_logs/*.log

FROM nginx:1.23

# Копируем собранные файлы в директорию Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Копируем конфигурацию Nginx
COPY ./frontend/nginx.conf /etc/nginx/nginx.conf

# Открываем порт 80
EXPOSE 80