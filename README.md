# PokedexApi

## Config environments

1. Reaname file `.env.template` to `.env` and complete the environments

## Project setup

```bash
# install dependencies
yarn install

# install nest cli
npm i -g @nestjs/cli

# run database
docker-compose up -d

# execute seed
http://localhost:3000/api/v2/seed/
```

## Compile and run the project

```bash
# development
yarn run start

# watch mode
yarn run start:dev

# production mode
yarn run start:prod
```

## Stack

- MongoDB
- Nest
