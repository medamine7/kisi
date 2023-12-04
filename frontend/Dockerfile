ARG PORT=8000

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

COPY --from=builder /app/.output .

ENV PORT=$PORT
EXPOSE $PORT

ENTRYPOINT [ "node", "./server/index.mjs" ]