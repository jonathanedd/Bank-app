//model
const { User } = require('../models/users.model');

const bcrypt = require('bcryptjs');


//Error handler
const { AppError } = require('../utils/appError');


const catchAsync = fn => {
    return (req, res, next) => {
        fn ( req, res, next).catch(next);
    };
};


// User Account create
const createUserAccount = catchAsync( async ( req, res, next ) => {
    
        const { name, password, amount } = req.body;

        const accountNumber = Math.ceil(Math.random() * 999999 );

        const salt = await bcrypt.genSalt(12);

        const hashPassword = await bcrypt.hash(password, salt);

        const newUserAccount = await User.create({
            name,
            password: hashPassword,
            amount,
            accountNumber
        });

        newUserAccount.password = undefined;

        res.status(201).json({
            newUserAccount
        })

        
});




// login 
const login = catchAsync( async (req, res, next) => {

    const {accountNumber, password } = req.body;

    // validate account
    const user = await User.findOne({where: { accountNumber, status: 'Active'}})

    if(!user){
        return next(new AppError('Account number not valid', 400));
    }

    // compare pwd with db
    const validPasword = await bcrypt.compare(password, user.password);
    if(!validPasword){
        return next(new AppError('password not valid', 400))
    }

    // Generate JWT ... 

    res.status(200).json({
        status: 'success'
    });
})


module.exports = { createUserAccount, login };


