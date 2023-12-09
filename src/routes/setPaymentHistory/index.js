var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const verifyMember = require('../../middlewares/verifyMember');
const setPaymentHistory = require('../../api/payment/setPaymentHistory');

var router = express.Router()

router.post('/savePaymentHistory', verifyToken, verifyMember, setPaymentHistory)

module.exports = router;
