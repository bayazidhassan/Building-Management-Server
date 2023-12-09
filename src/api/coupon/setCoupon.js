const Coupon = require('../../models/addCoupon');

const setCoupon = async (req, res) => {

    const coupon = req.body;
    const result = await Coupon.create(coupon);
    res.send(result);
}

module.exports = setCoupon;