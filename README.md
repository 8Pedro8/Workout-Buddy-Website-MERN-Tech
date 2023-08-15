# Workout Buddy App

Workout Buddy is a simple, intuitive, and efficient application designed to help you keep track of your workouts. It allows users to add, view, and delete workouts. This project is built using the MERN stack (MongoDB, Express, React, Node.js), with Vite configuring the React frontend.

## Features

- Add new workouts with specifications (type, load, reps)
- Delete workouts from your list
- View all your workouts on the homepage

## Prerequisites

- Node.js
- npm
- MongoDB Account

## Setup and Installation

### Backend

First, navigate to the backend directory:

```bash
cd backend/
```

#### Environment Variables

Create a `.env` file in the `backend` directory, and add the following environment variables:

```
PORT=YOUR_BACKEND_PORT
MONGO_URI=YOUR_MONGODB_URI
ALLOWED_ORIGINS=YOUR_ALLOWED_ORIGINS
```

- `PORT` is the port number where your backend server will run, e.g., `5000`.
- `MONGO_URI` is the MongoDB Atlas connection link.
- `ALLOWED_ORIGINS` is the origins that are allowed to access the backend, e.g., `http://localhost:3000` when running the frontend locally.

#### MongoDB

This project uses MongoDB Atlas as the database. Visit [MongoDB Atlas](https://www.mongodb.com/atlas/database) to set up your own cluster and get your `MONGO_URI`.

#### Dependencies

Install the necessary npm packages using the following command:

```bash
npm install
```

#### Running the Backend Server

After setting up the `.env` file and installing the dependencies, you can run the backend server with:

```bash
npm run dev
```

This should start your server on the port you specified in the `.env` file.

### Frontend

Navigate to the frontend directory:

```bash
cd frontend/
```

#### Dependencies

Install the necessary npm packages using the following command:

```bash
npm install
```

#### Running the Frontend Development Server

Start the development server with:

```bash
npm run dev
```

Your application should now be running on `http://localhost:3000`, or the port you've set in your environment variables.

## Usage

- Navigate to the homepage to view all the workouts
- Use the 'Add New Workout' form to specify the type, load, and repetitions of a new workout
- Click the 'Delete' button next to a workout to remove it from your list