const { Sequelize } = require('sequelize');

//import dotenv
const dotenv = require('dotenv');

dotenv.config({ path: './config.env'});


//connect to database
const db = new Sequelize({
    dialect: process.env.DB_DIALECT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    logging: false

});


module.exports = { db };