const { AppDataSource } = require("./data-source");

const getThread = async (req, res) => {
  const thread = await AppDataSource.query(
    `select t.id,u.nickname, u.profile_image,t.content, t.created_at, t.updated_at
        from threads t
        join users u
        on u.id = t.user_id
        order by t.created_at desc;`
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
  createLikeThread,
  deletelikeThread,
};
