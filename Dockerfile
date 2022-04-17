FROM node:16-alpine as builder


WORKDIR /app


COPY ./package.json .


RUN npm cache clean --force
RUN npm i
RUN npm rebuild node-sass --force


COPY . .

RUN npm run build

FROM nginx
EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html