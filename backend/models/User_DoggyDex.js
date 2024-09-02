const mongoose = require('mongoose');

const User_Dog = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    submittedUserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    doggydexbreedid: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('user_dog', User_Dog);