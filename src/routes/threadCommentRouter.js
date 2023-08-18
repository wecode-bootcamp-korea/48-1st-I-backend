const express = require("express");

const threadCommentController = require("../controllers/threadCommentController");
const threadCommentRouter = express.Router();

const { loginRequired } = require("../utils/auth");

threadCommentRouter.post(
  "/:thread_id/comments/create",
  loginRequired,
  threadCommentController.createComment
);
threadCommentRouter.delete(
  "/:thread_id/comments/delete",
  loginRequired,
  threadCommentController.deleteComment
);

module.exports = { threadCommentRouter };
