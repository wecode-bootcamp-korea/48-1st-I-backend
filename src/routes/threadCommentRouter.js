const express = require("express");

const threadCommentController = require("../controllers/threadCommentController");
const threadCommentRouter = express.Router();

threadCommentRouter.post("/:thread_id/comments/create", userController.signUp);
threadCommentRouter.delete(
  "/:thread_id/comments/delete",
  userController.signIn
);

module.exports = { threadCommentRouter };
