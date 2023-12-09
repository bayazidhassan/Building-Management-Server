const Apartments = require('../../models/apartments');

const findAll = async (req, res) => {

    const page = parseInt(req.query.page);
    const size = parseInt(req.query.size);

    const result = await Apartments.find().skip(page * size).limit(size);
    res.send(result);
}

module.exports = findAll;