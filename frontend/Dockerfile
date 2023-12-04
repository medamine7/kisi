FROM node:18-alpine as builder

WORKDIR /app

COPY yarn.lock .
COPY package.json . 

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:18-alpine as production

WORKDIR /app

COPY --from=builder /app/.output .

ENTRYPOINT [ "node", "./server/index.mjs" ]