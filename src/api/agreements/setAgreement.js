const Agreements = require('../../models/agreements');

const setAgreement = async (req, res) => {
    const agreement = req.body;

    const result = await Agreements.create(agreement);
    res.send(result);
}

module.exports = setAgreement;