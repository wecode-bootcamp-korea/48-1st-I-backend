const express = require("express");

const threadController = require("../controllers/threadController");
const {loginRequired} = require("../utils/auth");
const threadRouter = express.Router();

threadRouter.get("", threadController)
module.exports = { threadRouter };