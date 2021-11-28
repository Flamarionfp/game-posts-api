const { Sequelize } = require("sequelize");

const db = require("../connection");

const User = db.sequelize.define("users", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: db.Sequelize.INTEGER,
  },
  nome: {
    allowNull: false,
    type: db.Sequelize.STRING,
  },
  email: {
    allowNull: false,
    type: db.Sequelize.STRING,
  },
  senha: {
    allowNull: false,
    type: db.Sequelize.STRING,
  },
  status: {
    allowNull: false,
    type: db.Sequelize.INTEGER,
  },
});

//Descomentar para recriar o model ->

// User.sync({ force: true }).then(() => {
//   console.log("User created successfully!");
// });

module.exports = User;
