const express = require("express");

const userController = require("../controllers/userController");
const {loginRequired} = require("../utils/auth");
const userRouter = express.Router();

userRouter.post("/signup", userController.signUp);
userRouter.post("/signin", loginRequired,  userController.signIn);

module.exports = { userRouter };
