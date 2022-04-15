FROM node:16-alpine as build


WORKDIR /usr/app


COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build


FROM nginx:stable-alpine
COPY --from=build /usr/app/build /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]