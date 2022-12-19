## Description

It is the API section of Palamed. Palamed is an industrial order management. software allowing to anticipate the manufacturing of products requested by the customers by taking into account the maximum capacities of stocks

## API Technology

- [Nest](https://nestjs.com/) TypeScript framework for backend.
- [TypeORM](https://typeorm.io/) TypeScript ORM.
- [PostgreSQL](https://www.postgresql.org/) Database.
- [Docker](https://www.docker.com/) Containerization.
- [Swagger](https://swagger.io/) API documentation.
- [Angular](https://angular.io/) TypeScript framework for frontend.

## Installation

First of all, Yarn is recommended.
Then, just write the following command:

```bash
$ yarn install
```

## Running the app

For running the app, just write the command:

For development:
```bash
$ yarn start
```

For watch mode:
```bash
$ yarn start:dev
```

For production mode:
```bash
$ yarn start:prod
```

## Docker configuration

You can use Docker to run the app. For that, just write the following command:
```bash
$ docker-compose up --build
```
Next, you don't need again to write the "--build" option.

In order to config Docker ports and config, you need to create a file named ".env" in the root directory of the project. Then, you need to write the following lines:
```bash
#DOCKER CONFIG
# Mandatory
TARGET=dev # or prod

#NODE PORTS
# Mandatory
EXTERN_PORT=    # Example : 4000
# Mandatory
DEFAULT_PORT=   # Example : 3000
```

## Database configuration

In order to config the Database (running on Postgresql via Docker), you need to create a section in the ".env" file of the project. Then, you need to write the following lines:
```bash
#POSTGRES CONFIG
POSTGRES_PORT=5432 # Mandatory
POSTGRES_USER=YOUR USER NAME # Mandatory
POSTGRES_PASSWORD=YOUR USER PASSWORD # Mandatory
POSTGRES_DB=YOUR DATABASE NAME # Mandatory
TZ=YOUR TIMEZONE (ex: Europe/Paris) # Mandatory
```

## Swagger configuration
In order to config the Swagger API, you need to create a section in the ".env" file of the project. Then, you need to write the following lines:
```bash
#SWAGGER API
SWAGGER_TITLE=
SWAGGER_DESC=
SWAGGER_VERSION= # Currently in 2.0
```

## Documentation

All the documentation is accessible [here](https://github.com/hugostaedelin/hermes/wiki).
It includes user stories, customer need, diagrams and data conception schema.

## Support

If you need to report an issue, please go the [issue](https://github.com/hugostaedelin/hermes/issues) section to create a new issue.

## License

None.
