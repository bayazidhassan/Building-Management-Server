const Users = require('../../models/users');

const setUser = async (req, res) => {
    const user = req.body;
    const query = { Email: user.Email };

    const existingUser = await Users.findOne(query);

    if (existingUser) {
        return res.send({ message: 'User already exists.', insertedId: null });
    }

    const result = await Users.create(user);
    res.send(result);


}

module.exports = setUser;