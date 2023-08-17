const express = require("express");
const threadController = require("../controllers/threadController");
const auth = require("../utils/auth");

threadRouter = express.Router();

threadRouter.get("/list", threadController.getThread);
threadRouter.get("/:id", threadController.getThreadDetail);
threadRouter.post(
  "/like/:id",
  auth.loginRequired,
  threadController.createLikeThread
);
threadRouter.delete(
  "/unlike/:id",
  auth.loginRequired,
  threadController.deletelikeThread
);

module.exports = { threadRouter };
