FROM node:20

RUN apt-get update && apt-get install -y postgresql-client && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . .

RUN npm install --legacy-peer-deps

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main.js"]
