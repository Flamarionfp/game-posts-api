const Post = require("../../db/models/Post");

exports.index = async (req, res) => {
  const data = req.body;
  console.log(data);

  const response = await Post.create(data);
  if (response.dataValues) {
    res.status(200).send({
      success: true,
      msg: "Post cadastrado com sucesso!",
      data: response.dataValues,
    });
  } else {
    res.status(500).send({ success: false, msg: "Falha ao cadastrar o post" });
  }
};
