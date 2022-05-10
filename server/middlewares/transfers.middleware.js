const { User } = require('../models/users.model');


//utils 
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');


// Validate account exist
const accountExist = catchAsync ( async ( req, res, next ) => {
    const { accountNumber } = req.params;

    const account = await User.findOne({
        where: {accountNumber}
    });

    if(!account){
        return next( new AppError('Account number not found', 404));
    };

    req.account = account;
    next();
});


module.exports = { accountExist };