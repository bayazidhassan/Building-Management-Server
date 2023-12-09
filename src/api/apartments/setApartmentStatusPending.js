const Apartments = require("../../models/apartments");

const setApartmentStatusPending = async (req, res) => {

    const query = { _id: req.params.id };
    const updatedStatus = {
        $set: {
            status: 'pending'
        }
    }
    const result = await Apartments.updateOne(query, updatedStatus);
    res.send(result);
}

module.exports = setApartmentStatusPending;