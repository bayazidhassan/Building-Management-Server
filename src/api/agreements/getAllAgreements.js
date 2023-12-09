const Agreements = require('../../models/agreements');

const getAllAgreements = async (req, res) => {

    const result = await Agreements.find();
    res.send(result);
}

module.exports = getAllAgreements;