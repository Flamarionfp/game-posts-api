const verifyEmailAvaliable = (req, res, next) => {
  const User = require("../db/models/User");
  const email = req.body.email;

  User.findOne({
    where: {
      email: email,
    },
    attributes: ["email"],
  }).then((email) => {
    if (email === null) {
      next();
    } else {
      res
        .status(500)
        .send({
          success: false,
          msg: "Esse email ja está cadastrado!",
          error: "EMAIL_NOT_AVALIABLE",
        });
    }
  });
};

module.exports = verifyEmailAvaliable;
