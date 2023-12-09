const { Schema, model } = require('mongoose');

const makeAnnouncementSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},
    {
        versionKey: false
    }
)

const Announcement = model('Announcement', makeAnnouncementSchema);

module.exports = Announcement;