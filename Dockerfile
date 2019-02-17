FROM node:10-alpine AS builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install --only=prod
RUN npm run build


# FROM node:10-alpine
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/app/src
# COPY --from=builder /usr/src/.next

EXPOSE 3000
CMD ["npm", "start"]
