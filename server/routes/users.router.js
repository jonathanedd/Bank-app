const express = require('express');

//router
const router = express.Router();

// middlewares
const { userExist } = require('../middlewares/users.middleware');

//controller
const { createUserAccount, login, getAllUsers } = require('../controllers/users.controller');

// Endpoints
router.get('/', getAllUsers)
router.post('/signup', createUserAccount);
router.post('/login', login);
router.get('/:id/history', userExist);




// Export
module.exports = { usersRouter: router };