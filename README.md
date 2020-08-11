# Task Manager

## About the project
Task Manager is web server which is connected to mongodb database .It allows to its users to create account
and menage their tasks. It uses JWT for authentication and bcryptjs for storing password

## Build With
  - Node.js
  - Mongoose
  - express
  - mongodb - as database
  - jest - for testing
  - sendgrid/mail - for sending welcome and cancellation emails
### Prerequesitions 
 - npm
 - MongoDB
### Installation
clone everything

    $git clone https://github.com/kacperluk/task-manager
    $cd task-manager
install dependencies

    $npm install

Add .env files with your own configuration
    
    $mkdir config
    $touch ./config/dev.env ./config/test.env

Configre your environment variables. .env files should look like this
    
    PORT=YOUR_PORT
    SENDGRID_API_KEY=YOUR_SENDGRID_API_KEY
    MONGODB_URL=YOUR_MONGDB_URL
    JWT_SECRET=YOUR_JWT_SECRET

## Usage

Start your mongdb database and then run dev script in task-app director

    mongod --dbpath=INSERT_PATH_TO_YOUR_DATABASE_HERE
    npm run dev
    
Now you can send http requests to communicate with server .
Postman is great tool for this as i did not build frontend for this application yet