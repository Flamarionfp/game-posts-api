const Sequelize = require("sequelize");

const schema = "gp";
const credentials = "root";
const port = 3360;
const sequelize = new Sequelize(schema, credentials, credentials, {
  host: "localhost",
  dialect: "mysql",
  port: port,
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
