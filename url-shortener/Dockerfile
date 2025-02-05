FROM node:18-alpine 

WORKDIR /app

COPY server.js .
COPY routes ./routes
COPY .env ./.env
COPY model ./model
COPY package.json .

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]