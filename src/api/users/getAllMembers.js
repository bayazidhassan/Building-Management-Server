const Users = require("../../models/users");

const getAllMembers = async (req, res) => {

    const query = { Role: 'member' };
    const result = await Users.find(query);
    res.send(result);
}

module.exports = getAllMembers;