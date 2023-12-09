const Agreements = require('../../models/agreements');

const paymentAgreements = async (req, res) => {

    const query = { email: req.params.email, status: 'checked', accept_date: { $ne: '------' } };

    const result = await Agreements.find(query);
    res.send(result);
}

module.exports = paymentAgreements;