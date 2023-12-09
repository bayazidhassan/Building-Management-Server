var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const verifyMember = require('../../middlewares/verifyMember');
const getAgreementPayment = require('../../api/agreements/getAgreementPayment');




var router = express.Router()

router.get('/getAgreementPayment/:id', verifyToken, verifyMember, getAgreementPayment)

module.exports = router;
