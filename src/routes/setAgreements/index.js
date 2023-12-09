var express = require('express');
const setAgreement = require('../../api/agreements/setAgreement');
const verifyToken = require('../../middlewares/verifyToken');

var router = express.Router()

router.post('/setAgreements', verifyToken, setAgreement)

module.exports = router;
