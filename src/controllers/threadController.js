const threadDao = require("../models/threadDao");

const getThread = async (req, res) => {
  try {
    const threadList = await threadDao.listThread();
    res.status(201).json({ data: threadList });
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

const getThreadDetail = async (req, res) => {
  try {
    const id = req.params.id;
    const detail = await threadDao.detailThread(id);
    res.status(201).json({ data: detail });
  } catch (err) {
    res.status(err.status || 400).json({ message: err.message });
  }
};

const createLikeThread = async (req, res) => {
  try {
    const userId = req.user.id;
    const threadId = req.params.id;

    const like = threadDao.likeThread(userId, threadId);
    res.status(201).json({ message: "success !" });
  } catch (err) {
    res.status(err.status || 400).json({ message: err.message });
  }
};

const deletelikeThread = async (req, res) => {
  try {
    const userId = req.user.id;
    const threadId = req.params.id;

    const unLike = threadDao.unlikeThread(userId, threadId);
    res.status(201).json({ message: "delete like" });
  } catch (err) {
    res.status(err.status || 400).json({ message: err.message });
  }
};

module.exports = {
  getThread,
  getThreadDetail,
  createLikeThread,
  deletelikeThread,
};
