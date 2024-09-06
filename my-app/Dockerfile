# Используем официальный базовый образ Node.js
FROM node:18-alpine

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта в рабочую директорию контейнера
COPY . .

# Собираем приложение
RUN npm run build

# Используем nginx для сервировки статических файлов
FROM nginx:stable-alpine

# Копируем собранные файлы в директорию Nginx
COPY --from=0 /app/build /usr/share/nginx/html

# Открываем порт 80 для доступа к приложению
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
