// DataTypes
const { DataTypes } = require('sequelize');

// connect to database
const { db } = require('../utils/database');


const Transfer = db.define({
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    senderUserId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rceiverUserId: {
        type: DataTypes.STRING,
        defaultValue: 'credit'
    },
});



module.exports = { Transfer };
