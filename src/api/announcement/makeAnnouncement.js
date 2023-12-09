const Announcement = require("../../models/makeAnnouncement");


const makeAnnouncement = async (req, res) => {

    const announcement = req.body;

    const result = await Announcement.create(announcement);
    res.send(result);


}

module.exports = makeAnnouncement;