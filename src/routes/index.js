const express = require("express");
const routes = express.Router();

const { userRouter } = require("./userRouter");
routes.use("/user", userRouter);

const { threadRouter } = require("./threadRouter");
routes.use("/thread", threadRouter);

const { threadCommentRouter } = require("./threadCommentRouter");
routes.use("/thread", threadCommentRouter);

module.exports = { routes };
