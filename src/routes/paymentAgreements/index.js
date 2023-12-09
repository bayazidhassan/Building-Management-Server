var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const verifyMember = require('../../middlewares/verifyMember');
const paymentAgreements = require('../../api/agreements/paymentAgreements');



var router = express.Router()

router.get('/paymentAgreements/:email', verifyToken, verifyMember, paymentAgreements)

module.exports = router;
