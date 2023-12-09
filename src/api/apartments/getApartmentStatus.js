const Apartments = require('../../models/apartments');

const getApartmentStatus = async (req, res) => {

    const query = { _id: req.params.id }

    const result = await Apartments.findOne(query);

    let status = '';

    if (result?.status === 'pending') {
        status = result?.status;
    }
    if (result?.status === 'booked') {
        status = result?.status;
    }
    res.send(status);
}

module.exports = getApartmentStatus;