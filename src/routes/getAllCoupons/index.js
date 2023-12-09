var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const getAllCoupons = require('../../api/coupon/getAllCoupons');


var router = express.Router()

router.get('/getAllCoupons', getAllCoupons)

module.exports = router;
