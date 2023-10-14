const { AppDataSource } = require("./data-source");

const createComment = async (threadId, userId, content) => {
  await AppDataSource.query(
    `
        INSERT INTO thread_comments (
          thread_id,
          user_id,
          content
        ) VALUES (
          ?,
          ?,
          ?
        )
        `,
    [threadId, userId, content]
  );
};
module.exports = { createComment };
