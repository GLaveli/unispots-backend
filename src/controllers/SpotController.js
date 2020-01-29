const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {

    async index(req, res) {
        const { reference } = req.query;

        const spots = await Spot.find({ reference: reference });

        return res.json(spots);

    },

    async store(req, res) {
        const { filename } = req.file;
        const { cellPhone, rooms, reference, contract, contractTime, valor } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if (!user) {
            res.status(400).json({ error: 'usuario náo existente' });
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            cellPhone,
            rooms: rooms.split(',').map(room => room.trim()),
            reference: reference.split(',').map(ref => ref.trim()),
            contract,
            contractTime,
            valor
        });

        return res.json(spot)
    }
}