const express = require('express');


// Instance for app
const app = express();

//Enable json data
app.use(express.json());

// Routers
const { usersRouter } = require('./routes/users.router');


//Endpoints 
app.use('/api/v3/users', usersRouter );
// app.use('/api/v3/transfers', );



module.exports = { app };
