const Agreements = require('../../models/agreements');

const getAgreementPayment = async (req, res) => {

    const query = { _id: req.params.id };
    const result = await Agreements.findOne(query);
    res.send(result);
}

module.exports = getAgreementPayment;