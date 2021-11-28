const { Sequelize } = require("sequelize");

const db = require("../connection");

const Post = db.sequelize.define("posts", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: db.Sequelize.INTEGER,
  },
  imagem: {
    allowNull: false,
    type: db.Sequelize.TEXT("long"),
  },
  jogo: {
    allowNull: false,
    type: db.Sequelize.STRING,
  },
  descricao: {
    allowNull: true,
    type: db.Sequelize.STRING,
  },
  autor: {
    allowNull: false,
    type: db.Sequelize.STRING,
  },
});

//Descomentar para recriar o model ->

// Post.sync({ force: true }).then(() => {
//   console.log('Post created successfully!')
// })

module.exports = Post;
