const express = require("express");
const router = express.Router();

module.exports = function (app) {
  //Controllers

  //User Controllers
  const Login = require("../controllers/user/Login");
  const Signup = require("../controllers/user/Signup");

  //Post Controllers
  const SignupPost = require("../controllers/post/SignupPost");
  const GetPosts = require("../controllers/post/GetPosts");

  //User Endpoints
  app.route("/login").post(Login.index);
  app.route("/signup").post(Signup.index);

  //Post Endpoints
  app.route("/signuppost").post(SignupPost.index);
  app.route("/getposts").get(GetPosts.index);
};
