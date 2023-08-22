const threadCommentService = require("../services/threadCommentService");

const createComment = async (req, res) => {
  try {
    const { threadId } = req.params;
    const userId = req.user.id;
    const { content } = req.body;

    await threadCommentService.createComment(threadId, userId, content);

    res.status(201).json({ message: "created comment successfully" });
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

module.exports = { createComment };
