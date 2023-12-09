var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const getAgreements = require('../../api/agreements/getAgreements');


var router = express.Router()

router.get('/getAgreements/:email', verifyToken, getAgreements)

module.exports = router;
