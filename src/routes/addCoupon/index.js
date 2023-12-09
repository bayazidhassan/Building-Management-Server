var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const verifyAdmin = require('../../middlewares/verifyAdmin');
const setCoupon = require('../../api/coupon/setCoupon');


var router = express.Router()

router.post('/addCoupon', verifyToken, verifyAdmin, setCoupon)

module.exports = router;
