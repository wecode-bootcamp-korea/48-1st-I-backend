const express = require("express");
const threadController = require("../controllers/threadController");
const auth = require("../utils/auth");

threadRouter = express.Router();

threadRouter.get("/list", threadController.getThread);
threadRouter.get("/:id", threadController.threadDetail);
threadRouter.post("/like/:id", auth.loginRequired, threadController.threadLike);
threadRouter.delete(
  "/unlike/:id",
  auth.loginRequired,
  threadController.threadUnlike
);

module.exports = { threadRouter };
