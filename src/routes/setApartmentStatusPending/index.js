var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const setApartmentStatusPending = require('../../api/apartments/setApartmentStatusPending');


var router = express.Router()

router.patch('/setApartmentStatusPending/:id', verifyToken, setApartmentStatusPending)

module.exports = router;
