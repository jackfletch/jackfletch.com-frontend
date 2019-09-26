FROM node:10-alpine AS builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install --only=prod
RUN npm run build


FROM node:10-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/.next /usr/src/app/.next
COPY --from=builder /usr/src/app/package.json /usr/src/app/package.json
COPY --from=builder /usr/src/app/server.js /usr/src/app/server.js
COPY --from=builder /usr/src/app/node_modules /usr/src/app/node_modules
COPY --from=builder /usr/src/app/static /usr/src/app/static

EXPOSE 3000
CMD ["npm", "start"]
