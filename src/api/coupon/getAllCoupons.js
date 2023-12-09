const Coupon = require('../../models/addCoupon');

const getAllCoupons = async (req, res) => {

    const result = await Coupon.find();
    res.send(result);
}

module.exports = getAllCoupons;