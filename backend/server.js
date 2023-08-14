require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts')

// express app
const app = express();

// Global middleware
app.use(express.json()) // if req has body, it passes and attaches it to the req object
app.use((req, res, next) => {
    // log income request
    console.log(req.path, req.method)
    next()
})

// Routes relative to /api/workouts
app.use('/api/workouts', workoutRoutes)

// Connect to db
//mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => { 
            console.log('connected to db & listening on port 4000')
        });
    })
    .catch(err => console.error(err))