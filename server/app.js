const express = require('express');

const cors = require('cors');


// Instance for app
const app = express();

//cors
app.use(cors());

//Enable json data
app.use(express.json());

// Routers
const { usersRouter} = require('./routes/users.router');
const { transfersRouter } = require('./routes/transfers.route');


//Endpoints 
app.use('/api/v3/users', usersRouter );
app.use('/api/v3/transfers', transfersRouter );



module.exports = { app };
