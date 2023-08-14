require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts')
const cors = require('cors'); 

const allowedOrigins = process.env.ALLOWED_ORIGINS.split(',');

// express app
const app = express();

// Use CORS middleware
/**
 * If your backend and frontend are running on different origins
 * (i.e., different ports or domains during development),
 * you might need to set up CORS to allow requests from the frontend.
 */
app.use(cors({
    origin: function(origin, callback){
      if(!origin) return callback(null, true); // allow requests with no origin (like mobile apps or curl requests)
      if(allowedOrigins.indexOf(origin) === -1){
        let message = `The CORS policy for this site does not allow access from the specified origin: ${origin}`;
        return callback(new Error(message), false);
      }
      return callback(null, true);
    }
}));

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