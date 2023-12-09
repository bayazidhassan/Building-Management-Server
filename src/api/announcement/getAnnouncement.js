const Announcement = require("../../models/makeAnnouncement");


const getAnnouncement = async (req, res) => {

    const result = await Announcement.find();
    res.send(result);
}

module.exports = getAnnouncement;