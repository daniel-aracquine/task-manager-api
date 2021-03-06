# Task Manager Backend

## Tech Stack

- [NodeJs](https://nodejs.org/en/about/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [JWT](https://jwt.io/introduction)

# Getting Started

## Set up in Your local system

1. You must have git, nodejs and mongoDB installed in your local system.
2. Run MongoDB on PORT 27017.
   ```sh
   mongod
   ```
3. Fork this repo and then clone the forked repo.
   ```sh
   git clone 'YOUR REPO LINK'
   ```
4. install dependencies and run the server
   ```sh
   npm install
   npm run start
   ```
   This will make the server run at `http://localhost:8000/`

## Note: 
1. Either make an env file for all process.env variables or hardcode the value of those variables in /src/index.js , /src/db/mongoose.js , /src/emails/account.js , /src/middleware/auth.js and /src/models/user.js.
2. If you have made an env file, do download env-cmd as a dev dependency and then after providing path for the env file in scripts, run
   ```sh
   npm run dev
   ```
