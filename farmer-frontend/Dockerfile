
FROM node:10-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install -g @angular/cli@7
RUN npm install
COPY . /app

CMD ["ng","serve","--host", "0.0.0.0"]