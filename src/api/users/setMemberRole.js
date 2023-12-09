const Agreements = require("../../models/agreements");
const Apartments = require("../../models/apartments");
const Users = require("../../models/users");

const setMemberRole = async (req, res) => {

    const query = { Email: req.params.email };
    const updatedRole = {
        $set: {
            Role: 'member'
        }
    }
    await Users.updateOne(query, updatedRole);


    const query2 = { _id: req.body.apartment_id };
    const updatedStatus = {
        $set: {
            status: 'booked'
        }
    }
    await Apartments.updateOne(query2, updatedStatus);


    const query3 = { _id: req.body.id };
    const acceptDateAndStatus = {
        $set: {
            accept_date: req.body.date,
            status: 'checked'
        }
    }
    const result = await Agreements.updateOne(query3, acceptDateAndStatus);
    res.send(result);
}

module.exports = setMemberRole;