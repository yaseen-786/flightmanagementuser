FROM node:16.20.0-alpine3.17 as build
WORKDIR app/
COPY . .
RUN npm install -g @angular/cli
RUN npm install
RUN ng build
RUN npm run -c build

FROM nginx:alpine
COPY --from=build /app/dist/flightmanagementuser /usr/share/nginx/html
ARG API_URL
ENV API_URL ${API_URL}
EXPOSE 80
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]