const PaymentHistory = require("../../models/paymentHistory");


const getPaymentHistory = async (req, res) => {

    const query = { email: req.params.email };

    const result = await PaymentHistory.find(query);
    res.send(result);
}

module.exports = getPaymentHistory;