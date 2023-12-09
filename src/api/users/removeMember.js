const Agreements = require("../../models/agreements");
const Apartments = require("../../models/apartments");
const Users = require("../../models/users");

const removeMember = async (req, res) => {

    const query = { email: req.params.email };
    const result = await Agreements.find(query);
    const updatedStatus = {
        $set: {
            status: ''
        }
    }
    for (let i = 0; i < result.length; i++) {
        const query3 = { _id: result[i].apartment_id }
        await Apartments.updateOne(query3, updatedStatus);
    }


    await Agreements.deleteMany({ email: req.params.email });

    const query2 = { Email: req.params.email };
    const updatedRole = {
        $set: {
            Role: 'user'
        }
    }
    const result2 = await Users.updateOne(query2, updatedRole);
    res.send(result2);
}

module.exports = removeMember;