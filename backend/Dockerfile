FROM node:20

WORKDIR /app

COPY . .

RUN npm install --legacy-peer-deps 

RUN npm run build

EXPOSE 3000

CMD ["./wait-for-it.sh", "db:5432", "--", "node", "dist/main.js"]