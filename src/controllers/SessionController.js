const User = require('../models/User')


module.exports = {
    async store(req, res) {
        const { email, name, cellPhone, passWord, isStudent, course } = req.body;

        let user = await User.findOne({ email })

        if (!user) {
            /*
            const user = await User.create({ email, name, cellPhone, passWord, isStudent, course });
            */
            return res.json({ message: "Usuario não existente" });
        }

        return res.json(user);
    }
}