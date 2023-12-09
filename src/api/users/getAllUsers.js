const Users = require("../../models/users");

const getAllUsers = async (req, res) => {

    const query = { Role: 'user' };
    const result = await Users.find(query);
    res.send(result);
}

module.exports = getAllUsers;