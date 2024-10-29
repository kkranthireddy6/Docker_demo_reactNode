FROM node:23.0-alpine

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

EXPOSE 3010
# required for docker desktop port mapping

CMD ["npm", "start"]