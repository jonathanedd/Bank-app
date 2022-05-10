const express = require('express');


const router = express.Router();

// middlewares
// const { accountExist } = require('../middlewares/transfers.middleware');

//Controllers
const { transferMoney, getAllTransfers } = require('../controllers/transfers.controller')

//Endpoints 
router.route('/')
    .post(transferMoney)
    .get(getAllTransfers)


// router.post('/',  transferMoney );
// router.get('/', getAllTransfers);


module.exports = { transfersRouter: router};