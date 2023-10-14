const threadCommentDao = require("../models/threadCommentDao");
const userDao = require("../models/userDao");
const threadDao = require("../models/threadDao");

const createComment = async (threadId, userId, content) => {
  const thread = await threadDao.getThreadDetail(threadId);

  if (!thread) {
    const err = new Error("No such thread exists");
    err.statusCode = 404;
    throw err;
  }
  if (!content) {
    const err = new Error("Empty content");
    err.statusCode = 400;
    throw err;
  }

  const user = await userDao.getUserById(userId);

  if (!user) {
    const err = new Error("specified user does not exist");
    err.statusCode = 404;
    throw err;
  }

  await threadCommentDao.createComment(threadId, userId, content);
};
module.exports = { createComment };
