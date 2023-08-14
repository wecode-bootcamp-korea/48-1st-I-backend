const express = require("express");
const routes = express.Router();

const { userRouter } = require("./userRouter");
routes.use("/user", userRouter);

module.exports = { routes };
