const Users = require("../../models/users");


const checkAdmin = async (req, res) => {

    const email = req.params.email;
    if (email !== req.decoded.email) {
        return res.status(403).send({ message: 'Access forbidden' })
    }
    const query = { Email: email };
    const user = await Users.findOne(query);
    let admin = false;
    if (user) {
        admin = user?.Role === 'admin'
    }
    res.send({ admin });
}

module.exports = checkAdmin;