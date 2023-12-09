const Users = require("../../models/users");


const checkMember = async (req, res) => {

    const email = req.params.email;
    if (email !== req.decoded.email) {
        return res.status(403).send({ message: 'Access forbidden' })
    }
    const query = { Email: email };
    const user = await Users.findOne(query);
    let member = false;
    if (user) {
        member = user?.Role === 'member'
    }
    res.send({ member });
}

module.exports = checkMember;