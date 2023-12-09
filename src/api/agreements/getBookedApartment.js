const Agreements = require('../../models/agreements');

const getBookedApartment = async (req, res) => {

    const query = { status: 'checked', accept_date: { $ne: '------' } };

    const result = await Agreements.find(query);
    res.send(result);
}

module.exports = getBookedApartment;