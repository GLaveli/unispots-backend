const mongoose = require('mongoose');


const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    type: String,
    rooms: [],
    reference: [],
    contract: String,
    contractTime: String,
    valor: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}, {
    toJSON: {
        virtuals: true,
    }
});

SpotSchema.virtual('thumbnail_url').get(function () {
    return `http://192.168.25.159:3333/files/${this.thumbnail}`
});

module.exports = mongoose.model('Spot', SpotSchema);