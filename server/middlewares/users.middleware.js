const { User } = require('../models/users.model');




// utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');


const userExist = catchAsync( async(req, res, next) => {
    const { id } = req.params;

    const user = await User.findOne({
        where: {id, status: 'Active'},
        attributes: {exclude: ['password']}
    });

    if(!user){
        return next(new AppError('User not found with ID', 404));
    };

    req.user = user;
    next();

});


module.exports = { userExist }
