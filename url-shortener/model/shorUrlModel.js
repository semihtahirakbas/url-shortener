const mongoose = require('mongoose');

const shortUrlModel = new mongoose.Schema({
    originalURL: {type: String, required: true},
    shortID: {type: String, required: true, unique: true}
})


module.exports = mongoose.model('ShortURL', shortUrlModel)