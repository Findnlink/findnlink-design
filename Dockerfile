FROM nginx:1.21.1-alpine
WORKDIR /usr/src/app
COPY . .
COPY storybook-static /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]
