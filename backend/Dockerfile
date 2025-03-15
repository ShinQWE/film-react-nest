FROM node:20

WORKDIR /app

COPY . .

RUN npm install --production --legacy-peer-deps

COPY . . 

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main.js"]