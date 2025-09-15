# Use Node.js 22 as base
FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install
COPY . .

RUN npm run build

EXPOSE 42000
