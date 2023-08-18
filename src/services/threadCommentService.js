const threadCommentDao = require("../models/threadCommentDao");
const userDao = require("../models/userDao");
// const threadDao = require("../models/threadDao");

const createComment = async (thread_id, user_id, content) => {
  //   const thread = await threadDao.getThreadDetail(thread_id);
  const thread = await threadCommentDao.getThreadById(thread_id);

  if (!thread) {
    const err = new Error("No such thread exists");
    err.statusCode = 404;
    throw err;
  }
  if (!content) {
    const err = new Error("Empty content");
    err.statusCode = 422;
    throw err;
  }

  const user = await userDao.getUserById(user_id);

  if (!user) {
    const err = new Error("specified user does not exist");
    err.statusCode = 404;
    throw err;
  }

  await threadCommentDao.createComment(thread_id, user_id, content);
};
module.exports = { createComment };
