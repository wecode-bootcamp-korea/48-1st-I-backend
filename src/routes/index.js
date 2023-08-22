const express = require("express");
const routes = express.Router();

const { userRouter } = require("./userRouter");
const { threadRouter } = require("./threadRouter");
routes.use("/user", userRouter);
routes.use("/thread", threadRouter);

module.exports = { routes };
