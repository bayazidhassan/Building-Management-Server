const Coupon = require('../../models/addCoupon');

const getCouponPercentage = async (req, res) => {

    const query = { coupon_code: req.params.coupon }
    const result = await Coupon.findOne(query);
    res.send(result);
}

module.exports = getCouponPercentage;