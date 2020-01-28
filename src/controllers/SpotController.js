const Spot = require('../models/Spot');

module.exports = {
    async store(req, res) {
        const { filename } = req.file;
        const { cellPhone, rooms, contract, contractTime, valor } = req.body;
        const { user_id } = req.headers;

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            cellPhone,
            rooms: rooms.split(',').map(room => room.trim()),
            contract,
            contractTime,
            valor
        });

        return res.json(spot)
    }
}