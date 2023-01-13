
## Description

This repository was made for Igma's backend test. Here's an API for customers registration with cpf verification.

## Technologies

- TypeScript 
- Nest.js 
- TypeORM
- Swagger
- Docker
- Postgresql 
- Redis
- Railway for deploy

## Project Structure

Projects Entity:

![igma-der drawio](https://user-images.githubusercontent.com/90461911/212172463-85c987c7-4990-4d7f-8ae9-a116a52b0678.png)

## Installation

Create your [env file](.env.example):

```bash
$ cp .env.example .env
```
and set them.

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod

# run with docker (recommended)
$ docker-compose up --build -d
```
## Deployment URL:

For the deployment, the [railway](https://railway.app/) platform was used as an infrastructure provider.

## Documentation

In this project I used trello to guide my tasks and insomnia to test the endpoints. Here are the links to the documentation,
for trello and insomnia JSON if you want to test the routes. There are `baseUrl` options for local testing and `productionUrl` for production.

- [Swagger](https://igma-backend-test-production.up.railway.app/api/docs)
- [Trello](https://trello.com/b/K6cF6sB1/igma-backend)
- [Insomia](https://drive.google.com/file/d/1Mp7xEeApDiOF3y8IDa5u3ufVpO76Znmz/view?usp=sharing)

## Test

```bash
# unit tests
$ yarn test

```

## License

Nest is [MIT licensed](LICENSE).
