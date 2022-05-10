const { User } = require('../models/users.model');

const bcrypt = require('bcryptjs');


//utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');





// User Account create
const createUserAccount = catchAsync( async ( req, res, next ) => {
    
        const { name, password } = req.body;

        const accountNumber = Math.ceil(Math.random() * 1000000 );

        const salt = await bcrypt.genSalt(12);

        const hashPassword = await bcrypt.hash(password, salt);

        const newUserAccount = await User.create({
            name,
            password: hashPassword,
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

    // Compare pwd with db
    if( !user || !(await bcrypt.compare(password, user.password))){
        return next(new AppError('Invalid Credentials', 400));
    }

    // Generate JWT ... 

    res.status(200).json({
        status: 'success'
    });
});


// get All users
const getAllUsers = catchAsync ( async ( req, res, next) => {
    const users = await User.findAll({
        attributes: { exclude: ['password']}
    });

    res.status(201).json({
        users
    })
});



module.exports = { createUserAccount, login, getAllUsers };


