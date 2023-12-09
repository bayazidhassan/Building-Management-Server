var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const verifyMember = require('../../middlewares/verifyMember');
const CreatePaymentIntent = require('../../api/payment/createPaymentIntent');


var router = express.Router()

router.post('/create-payment-intent', verifyToken, verifyMember, CreatePaymentIntent)

module.exports = router;
