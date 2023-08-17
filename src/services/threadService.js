const threadDao = require("../models/threadDao");

// 에러 핸들링
// 비즈니스 로직

const uploadThread = async (userId, content) => {
  await threadDao.uploadThread(userId, content);
};

const editThread = async (thread_id, user_id, content) => {
  await threadDao.editThread(thread_id, user_id, content);
};

const deleteThread = async (thread_id, user_id, content) => {
  await threadDao.deleteThread(thread_id, user_id, content);
};

module.exports = { uploadThread, editThread, deleteThread };
