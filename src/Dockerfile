FROM node:16.16-alpine AS base

WORKDIR /igma/app
COPY [ "package*.json", "tsconfig.build.json", "tsconfig.json", "yarn.lock" , "./" ]

FROM base AS dev
RUN yarn install --frozen-lockfile
COPY . .
EXPOSE 3001
CMD [ "yarn", "start:dev", "app" ]

FROM base AS prod

RUN yarn install --frozen-lockfile --production
COPY . .
RUN yarn global add @nestjs/cli
RUN yarn build
EXPOSE 3001
CMD [ "yarn", "start:prod app" ]