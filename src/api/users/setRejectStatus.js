const Agreements = require("../../models/agreements");
const Apartments = require("../../models/apartments");

const setRejectStatus = async (req, res) => {

    const query = { _id: req.body.apartment_id };
    const updatedStatus = {
        $set: {
            status: ''
        }
    }
    await Apartments.updateOne(query, updatedStatus);

    const query2 = { _id: req.body.id };
    const result = await Agreements.deleteOne(query2);
    res.send(result);
}

module.exports = setRejectStatus;