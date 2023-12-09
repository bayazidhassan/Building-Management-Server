var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const verifyMember = require('../../middlewares/verifyMember');
const getCouponPercentage = require('../../api/coupon/getCouponPercentage');

var router = express.Router()

router.get('/getCouponPercentage/:coupon', verifyToken, verifyMember, getCouponPercentage)

module.exports = router;
