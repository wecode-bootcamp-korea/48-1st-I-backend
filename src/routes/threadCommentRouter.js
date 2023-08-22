const express = require("express");

const threadCommentController = require("../controllers/threadCommentController");
const threadCommentRouter = express.Router();

const { loginRequired } = require("../utils/auth");

threadCommentRouter.post(
  "/:thread_id/comments",
  loginRequired,
  threadCommentController.createComment
);

module.exports = { threadCommentRouter };
