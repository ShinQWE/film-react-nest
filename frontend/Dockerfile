FROM node:20 AS build

# Установка необходимых пакетов
RUN apt-get update && apt-get install -y build-essential git

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы проекта
COPY package*.json ./
RUN npm install

# Копируем остальные файлы
COPY . .

# Собираем приложение
RUN npm run build 

# Используем Nginx для раздачи статических файлов
FROM nginx:alpine

# Копируем собранные файлы из предыдущего этапа
COPY --from=build /app/dist /usr/share/nginx/html

# Открываем порт
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]