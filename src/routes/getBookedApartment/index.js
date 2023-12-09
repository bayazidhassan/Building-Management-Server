var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const verifyAdmin = require('../../middlewares/verifyAdmin');
const getBookedApartment = require('../../api/agreements/getBookedApartment');


var router = express.Router()

router.get('/getBookedApartment', verifyToken, verifyAdmin, getBookedApartment)

module.exports = router;
