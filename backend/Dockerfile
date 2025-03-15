FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install --production --legacy-peer-deps

COPY . .

RUN npm run build || cat /root/.npm/_logs/*.log && ls -l dist

EXPOSE 3000

CMD ["node", "dist/main.js"]
