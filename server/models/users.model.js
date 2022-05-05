
// DataTypes
const { DataTypes } = require('sequelize');

//connect to database
const { db } = require('../utils/database');


//User column
const User = db.define('user', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type:  DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    accountNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'Active'
    }
});

module.exports = { User };

