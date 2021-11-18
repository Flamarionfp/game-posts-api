const Post = require("../../db/models/Post");

exports.index = async (req, res) => {
  const response = await Post.findAll();
  if(response.length > 0) {
    res.status(200).send({ success: true, post: response });
  } else {
    res.status(500).send({ success: false, msg: 'Erro ao carregar postagens'})
  }
};
