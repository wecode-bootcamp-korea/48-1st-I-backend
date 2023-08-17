const threadService = require("../services/threadService");

const uploadThread = async (req, res) => {
  try {
    // const { user_id, content } = req.body;
    console.log("req.user.id : ", req.user.id); // 추후 삭제
    console.log("req.user : ", req.user); // 추후 삭제
    console.log("req.body : ", req.body); // 추후 삭제

    const user_id = req.user.id;
    const { content } = req.body;

    await threadService.uploadThread(user_id, content);

    res.status(201).json({ message: "upload complete" });
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

const editThread = async (req, res) => {
  try {
    console.log("req.params.id : ", req.params.id); // 추후 삭제

    const thread_id = req.params.id;
    const user_id = req.user.id;
    const { content } = req.body;
    // const { comment } = req.body.content;

    await threadService.editThread(thread_id, user_id, content);
    // await threadService.editThread(thread_id, user_id, content);

    res.status(201).json({ message: "edit complete" });
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

const deleteThread = async (req, res) => {
  try {
    console.log("req.params.id : ", req.params.id); // 추후 삭제

    const thread_id = req.params.id;
    const user_id = req.user.id;
    const { content } = req.body;

    await threadService.deleteThread(thread_id, user_id, content);

    res.status(201).json({ message: "delete complete" });
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

module.exports = { uploadThread, editThread, deleteThread };
