const User = require('../models/User')


module.exports = {
    async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({ email })

        if (!user) {

            return res.json({ message: "Usuario não existente" });
        }

        return res.json(user);
    }
}