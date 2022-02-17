# Storefront Backend Project

## Getting Started

This repo contains a basic Node and Express app to get you started in constructing an API. To get started, clone this repo and run `yarn` in your terminal at the project root.

## Required Technologies
Your application must make use of the following libraries:
- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing


### Installation Instructions

- yarn or npm install
**Packages** :
- npm install

- Express: npm i -S express npm i -D @types/express

- Typescript: npm i -D typescript

- db-migrate: npm install -g db-migrate

- cors: npm install --save cors

- bcrypt: npm -i bcrypt npm -i -D @types/bcrypt

- morgan: npm install --save morgan npm -i -D @types/morgan

- jsonwebtoken: npm install jsonwebtoken --sav npm -i -D @types/jsonwebtoken

- cross-env: npm install --save-dev cross-env

- jasmine: npm install jasmine @types/jasmine @ert78gb/jasmine-ts ts-node --save-dev


### Set up Database
3 Databases are created for: Orders,Products and Users
And 3 more Test Databases

**Steps**
- Connect to postgres db : psql -U postgres
- Create a User with a password
- Grand All privilages to the user to use the main databases
- Grand All privilages to the user to use the test databases

- Create Database for each of Orders, Products and Users 
- Create Test Database 
- Connect to Database

- Use sqls Folder inside Migration folder to create the tables in each database
- Then Migrate db -up 

### Enviromental Variables 
The environmental variables that needs to be set in a .env file: 
DB_NAME = myapp
DB_NAME_TEST = myapp_test
DB_HOST = localhost
DB_PORT = 5432
DB_USER = postgres
DB_PASS= Postgres1234
ENV=dev
SALT_ROUNDS=10

### Running Ports
Server will start on port 3000 and Database on port 5432

### Endpoint Access
All endpoints are in the REQUIREMENT.md file.

