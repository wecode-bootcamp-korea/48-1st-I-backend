const { AppDataSource } = require("./data-source");

const getThreadById = async (thread_id) => {
  const [thread] = await AppDataSource.query(
    `
        SELECT t.id, t.user_id, t.content, t.created_at, t.updated_at
        FROM threads t
        WHERE t.id = ?
      `,
    [thread_id]
  );

  return thread;
};

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
module.exports = { getThreadById, createComment };
