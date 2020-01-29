const mongoose = require('mongoose');


const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    cellPhone: String,
    rooms: [],
    reference: [],
    contract: String,
    contractTime: String,
    price: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});


module.exports = mongoose.model('Spot', SpotSchema);