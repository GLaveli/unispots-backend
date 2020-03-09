const User = require('../models/User')


module.exports = {
  async store(req, res) {
    const { email, name, cellPhone, passWord, course } = req.body;

    let userChack = await User.find({ email });

    console.log(userChack);

    if (userChack === []) {
      return res.send({ message: "E-mail ja cadastrado" });
    };

    const user = await User.create({
      email,
      name,
      cellPhone,
      passWord,
      course
    });

    return res.send(user);



  }
}