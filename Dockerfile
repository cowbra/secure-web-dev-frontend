FROM node:18-alpine

WORKDIR /usr/src/app

COPY . .

RUN ["npm", "install"]

CMD ["npm", "run", "dev"]

# FROM nginx:1-alpine

# COPY ./svelte-kit/output /usr/share/html/