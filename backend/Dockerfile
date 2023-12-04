
ARG PORT=3000

FROM node:18-alpine as builder

WORKDIR /app

COPY yarn.lock .
COPY package.json . 

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:18-alpine as production

ARG PORT

WORKDIR /app

COPY --from=builder /app/package.json /app/yarn.lock ./
COPY --from=builder /app/dist ./dist

RUN yarn install --production --frozen-lockfile

EXPOSE $PORT

ENTRYPOINT [ "yarn", "start" ]