const express = require('express');

//router
const router = express.Router();

//controller
const { createUserAccount, login } = require('../controllers/users.controller');

// Endpoints
router.post('/signup', createUserAccount);
router.post('/login', login);





// Export
module.exports = { usersRouter: router };