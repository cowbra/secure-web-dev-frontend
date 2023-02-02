FROM node:18-alpine

WORKDIR /usr/src/app

COPY . .

RUN ["npm", "install"]

RUN ["npm", "run", "build"]

# Default port for npm run preview, otherwise it is 5173 in dev mode
EXPOSE 4173

CMD ["npm", "run", "preview"]