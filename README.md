# Niviba Website

### This repo includes: Server : Nodejs based, and Client: React based.
-----------------

## Set up database

1. Create .env file
```
# .env
PORT=8080
NODE_ENV=development

USE_DOCKER=FALSE
# USE_DOCKER=TRUE if you run the website with docker

```
------------------

## Now we start running the application:

1. Install modules:
```
    cd ./client-react && npm i && cd ../server && npm i && cd ..
```

2. Start client:
```
    cd ./client && npm start && cd ..
```

3. Start server:
```
    cd ./server && npm start
```
-------------------

## If you want to run server and database on Docker
```
# Start the server with building server and database in docker
docker-compose up --build
```

------------------
## Inspect database inside docker

```
# Get name of mongo server
docker ps

# Get in to docker mongo container
docker exec -it <mongo server name> /bin/bash
mongo

# Inspect database with mongo container bash with mongo shell
```
### Refer to [this link](https://docs.mongodb.com/manual/mongo/) for mongo shell usage.

------------------
## Testing

1. Testing database with postman:
    * Testing depot:
    ```
    # Type some code here!
    ```
    * Testing user login and register:
    * Testing location:
    * Testing vehicle:
    * Testing front-end: