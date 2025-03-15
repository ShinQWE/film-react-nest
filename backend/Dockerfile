FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install --production --legacy-peer-deps

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main.js"]
# CMD ["sh", "-c", "pwd && ls -l dist"]
