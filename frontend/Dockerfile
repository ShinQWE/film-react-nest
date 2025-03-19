# Используем официальный образ Node.js
FROM node:16

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем остальные файлы
COPY . .

# Собираем приложение
RUN npm run build

# Используем Nginx для раздачи статических файлов
FROM nginx:alpine
COPY --from=0 /usr/src/app/build /usr/share/nginx/html

# Открываем порт
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]