const { AppDataSource } = require("./data-source");

const getThread = async (req, res) => {
  const thread = await AppDataSource.query(
    `SELECT t.id,u.nickname, u.profile_image,t.content, t.created_at, t.updated_at
        FROM threads t
        JOIN users u
        ON u.id = t.user_id
        ORDER BY t.created_at DESC;`
  );
  return thread;
};

const getThreadDetail = async (id) => {
  const detail = await AppDataSource.query(
    `SELECT t.id, u.nickname, u.profile_image, t.content, t.created_at, t.updated_at 
    FROM threads t
    JOIN users u
    ON u.id = t.user_id
    WHERE t.id = ?;`,
    [id]
  );
  return detail;
};

const uploadThread = async (userId, content) => {
  await AppDataSource.query(
    `
    INSERT INTO threads (
      user_id,
      content
    ) VALUES (
      ?,
      ?
    )
    `,
    [userId, content]
  );
};

const editThread = async (threadId, userId, content) => {
  await AppDataSource.query(
    `
    UPDATE threads 
    SET content = ? 
    WHERE user_id = ? AND id = ? 
    `,
    [content, userId, threadId]
  );
};

const deleteThread = async (threadId, userId) => {
  await AppDataSource.query(
    `
    DELETE FROM threads WHERE user_id = ? AND id = ?;
    `,
    [userId, threadId]
  );
};

const createLikeThread = async (userId, threadId) => {
  await AppDataSource.query(
    `INSERT INTO thread_likes (user_id,thread_id) VALUES (?,?);`,
    [userId, threadId]
  );
};

const deletelikeThread = async (userId, threadId) => {
  await AppDataSource.query(
    `DELETE FROM thread_likes WHERE user_id = ? and thread_id = ?;
    `,
    [userId, threadId]
  );
};

module.exports = {
  getThread,
  getThreadDetail,
  uploadThread,
  editThread,
  deleteThread,
  createLikeThread,
  deletelikeThread,
};
