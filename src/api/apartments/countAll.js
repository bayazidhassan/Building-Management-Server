const Apartments = require('../../models/apartments');

const countAll = async (req, res) => {

    const count = await Apartments.estimatedDocumentCount();
    res.send({ count });
}

module.exports = countAll;