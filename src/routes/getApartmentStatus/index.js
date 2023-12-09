var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const getApartmentStatus = require('../../api/apartments/getApartmentStatus');



var router = express.Router()

router.get('/getApartmentStatus/:id', verifyToken, getApartmentStatus)

module.exports = router;
