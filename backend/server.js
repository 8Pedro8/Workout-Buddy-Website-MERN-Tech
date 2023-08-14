require('dotenv').config()

const express = require('express');

// express app
const app = express();

// Global middleware
app.use((req, res, next) => {
    // log income request
    console.log(req.path, req.method)
    next()
})

// Setup route handler
app.get('/', (req, res) => {

    // send back json string
    res.json({
        msg: 'Welcome to the app'
    })
})

// listen for requests
app.listen(process.env.PORT, () => { 
    console.log('listening on port 4000')
 });