FROM node:16.7.0-alpine3.14 AS builder

RUN apk add --no-cache --virtual .gyp python2 make g++ \
    && yarn install --frozen-lockfile \
    && apk del .gyp \

WORKDIR /usr/src/app
COPY . .
## RUN yarn install --frozen-lockfile
RUN yarn run storybook:export

FROM nginx:1.21.1-alpine
COPY --from=builder storybook-static /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]