const { Transfer } = require('../models/transfers.model');
const { User } = require('../models/users.model');

// utils
const { catchAsync } = require('../utils/catchAsync');


//HTTP POST
const transferMoney = catchAsync ( async(req, res, next) => {

    const { amount, senderUserId, receiverUserId } = req.body;

    const newTransfer = await Transfer.create({
        amount,
        senderUserId,
        receiverUserId
    });

    res.status(201).json({
        newTransfer
    })

});

// get all transfer 
const getAllTransfers = catchAsync( async (req, res, next) => {
    const allTransfers = await Transfer.findAll();

    res.status(201).json({
        allTransfers
    });
})


module.exports = { transferMoney, getAllTransfers };