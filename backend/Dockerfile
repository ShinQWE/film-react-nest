FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install --production --legacy-peer-deps

COPY . .

RUN npm install -g @nestjs/cli  
RUN npm install --save-dev @types/node  

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main.js"]