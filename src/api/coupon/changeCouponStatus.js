const Coupon = require("../../models/addCoupon");

const changeCouponStatus = async (req, res) => {

    const query = { _id: req.body.id };
    const updatedStatus = {
        $set: {
            coupon_status: req.body.status
        }
    }
    const result = await Coupon.updateOne(query, updatedStatus);
    res.send(result);
}

module.exports = changeCouponStatus;