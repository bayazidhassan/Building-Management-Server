const { Schema, model } = require('mongoose');

const paymentHistorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    agreement_id: {
        type: String,
        required: true
    },
    floor_no: {
        type: String,
        required: true
    },
    block_name: {
        type: String,
        required: true
    },
    apartment_no: {
        type: String,
        required: true
    },
    rent: {
        type: String,
        required: true
    },
    payMonth: {
        type: String,
        required: true
    },
    paymentDate: {
        type: String,
        required: true
    },
    transactionId: {
        type: String,
        required: true
    }
},
    {
        versionKey: false
    }
)

const PaymentHistory = model('Payment History', paymentHistorySchema);

module.exports = PaymentHistory;