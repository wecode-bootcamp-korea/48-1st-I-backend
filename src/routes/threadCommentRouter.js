const express = require("express");

const userController = require("../controllers/userController");
const threadCommentRouter = express.Router();

threadCommentRouter.post("/:thread_id/comments/create", userController.signUp);
threadCommentRouter.delete(
  "/:thread_id/comments/delete",
  userController.signIn
);

module.exports = { threadCommentRouter };
