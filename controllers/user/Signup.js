const User = require("../../db/models/User");

exports.index = async (req, res) => {
  let data = req.body;
  data = { ...data, status: 1 };

  const response = await User.create(data);
  if (response.dataValues) {
    res.status(200).send({
      success: true,
      msg: "Cadastro bem sucedido!",
      data: response.dataValues,
    });
  } else {
    res.status(500).send({ success: false, msg: "Falha ao cadastrar" });
  }
};
