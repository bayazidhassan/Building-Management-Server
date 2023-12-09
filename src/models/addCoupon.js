const { Schema, model } = require('mongoose');

const couponSchema = new Schema({
    coupon_code: {
        type: String,
        required: true
    },
    discount_percentage: {
        type: String,
        required: true
    },
    coupon_description: {
        type: String,
        required: true
    },
    coupon_status: {
        type: String,
        required: true
    }
},
    {
        versionKey: false
    }
)

const Coupon = model('Coupon', couponSchema);

module.exports = Coupon;