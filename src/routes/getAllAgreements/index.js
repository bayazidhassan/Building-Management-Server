var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const verifyAdmin = require('../../middlewares/verifyAdmin');
const getAllAgreements = require('../../api/agreements/getAllAgreements');


var router = express.Router()

router.get('/getAllAgreements', verifyToken, verifyAdmin, getAllAgreements)

module.exports = router;
