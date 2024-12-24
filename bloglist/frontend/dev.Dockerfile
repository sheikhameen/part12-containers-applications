FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD ["npm", "start", "--", "--host", "0.0.0.0"]