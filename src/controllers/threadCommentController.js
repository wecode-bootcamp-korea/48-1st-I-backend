const threadCommentService = require("../services/threadCommentService");

const createComment = async (req, res) => {
  try {
    const { thread_id } = req.params.thread_id;
    const { user_id } = req.user.id;
    const { content } = req.body;
    await threadCommentService.createComment(thread_id, user_id, content);

    res.status(201).end();
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

module.exports = { createComment };
