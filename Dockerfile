FROM node:10-alpine AS builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm ci --only=prod
RUN npm run build


FROM node:10-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/.next /usr/src/app/.next
COPY --from=builder /usr/src/app/package.json /usr/src/app/package.json
COPY --from=builder /usr/src/app/node_modules /usr/src/app/node_modules
COPY --from=builder /usr/src/app/public /usr/src/app/public

EXPOSE 3000
CMD ["npm", "start"]
