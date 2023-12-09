const PaymentHistory = require('../../models/paymentHistory');


const setPaymentHistory = async (req, res) => {

    const history = req.body;
    const result = await PaymentHistory.create(history);
    res.send(result);
}

module.exports = setPaymentHistory;