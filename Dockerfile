

#66666666666666666666666666666666666666666666666666666666666666666666
FROM node:14 as builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2 - Deploy with NGNIX
FROM nginx:1.15.2-alpine

COPY --from=builder app/dist /var/www
COPY nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 81

ENTRYPOINT ["nginx","-g","daemon off;"]