require('dotenv').config()

const express = require('express');
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

// listen for requests
app.listen(process.env.PORT, () => { 
    console.log('listening on port 4000')
 });