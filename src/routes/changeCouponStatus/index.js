var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const verifyAdmin = require('../../middlewares/verifyAdmin');
const changeCouponStatus = require('../../api/coupon/changeCouponStatus');



var router = express.Router()

router.patch('/changeCouponStatus', verifyToken, verifyAdmin, changeCouponStatus)

module.exports = router;
