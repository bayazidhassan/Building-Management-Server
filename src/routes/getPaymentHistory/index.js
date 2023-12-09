var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const verifyMember = require('../../middlewares/verifyMember');
const getPaymentHistory = require('../../api/payment/getPaymentHistory');


var router = express.Router()

router.get('/getPaymentHistory/:email', verifyToken, verifyMember, getPaymentHistory)

module.exports = router;
