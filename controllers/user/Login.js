const User = require("../../db/models/User");

exports.index = async (req, res) => {
  const email = req.body.email;
  const senha = req.body.senha;

  const response = await User.findOne({
    where: {
      email: email,
      senha: senha,
      status: 1,
    },
    attributes: ["email", "senha", "status"],
  });

  console.log(response.dataValues)

  if (response === null) {
    res.send({
      success: false,
      msg: "Dados inválidos!",
    });
  } else {
    res.status(200).send({
      success: true,
      msg: "Login bem sucedido",
      data: response.dataValues,
    });
  }
};
