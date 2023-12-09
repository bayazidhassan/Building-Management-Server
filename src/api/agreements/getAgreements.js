const Agreements = require('../../models/agreements');

const getAgreements = async (req, res) => {

    const query = { email: req.params.email };
    if (req.params.email !== req.decoded.email) {
        return res.status(403).send({ message: 'Access forbidden' })
    }
    
    const result = await Agreements.find(query);
    res.send(result);
}

module.exports = getAgreements;