FROM node:20.9.0-alpine3.17 AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --fronzen-lockfile
COPY . .
RUN yarn build:dev

RUN sed -i '/<head>/a <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />' /app/dist/index.html

FROM nginx:stable-alpine AS production
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]