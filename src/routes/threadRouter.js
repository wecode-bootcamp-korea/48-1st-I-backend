const express = require("express");

const threadController = require("../controllers/threadController");
const threadRouter = express.Router();

const { loginRequired } = require("../utils/auth");

threadRouter.post("/upload", loginRequired, threadController.uploadThread);
threadRouter.patch("/:id", loginRequired, threadController.editThread);
threadRouter.delete("/:id", loginRequired, threadController.deleteThread);

module.exports = { threadRouter };
