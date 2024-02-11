# Readme

This repository contains both the frontend and backend code for [project name].

## Frontend

To start the frontend, navigate to the client folder and follow these steps:

1. Open a terminal.
2. Navigate to the client folder.
3. Run `npm i` to install dependencies.
4. Run `npm run dev` to start the development server.

## Backend

To start the backend, navigate to the server folder and follow these steps:

1. Open a new terminal window.
2. Navigate to the server folder.
3. Run `npm i` to install dependencies.
4. Run `npm run dev` to start the backend server.

## Environment Setup

For both the frontend and backend, you need to set up environment variables by creating a `.env` file in each respective folder.

### Frontend (.env in client folder)

Add the following line to your `.env` file:

NEXT_PUBLIC_BASE_URL="http://localhost:8008"


### Backend (.env in server folder)

Add the following line to your `.env` file:

MONGOOSE_URL="mongodb+srv://<username>:<password>@cluster0.sqf4qdi.mongodb.net/?retryWrites=true&w=majority"

Create a Database in MongoDB Atlas and replace the MongoDB connection string with your actual connection string.


## Starting the Servers

Once you have set up the environment variables and installed dependencies, you can start the frontend and backend servers using the instructions provided above.

Remember, the frontend runs on port 3000 by default, and the backend will connect to the MongoDB database using the provided connection string.