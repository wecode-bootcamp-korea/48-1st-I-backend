const { AppDataSource } = require("./data-source");

const createComment = async (thread_id, user_id, content) => {
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
    [thread_id, user_id, content]
  );
};
module.exports = { createComment };
