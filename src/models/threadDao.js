const { AppDataSource } = require("./data-source");

const uploadThread = async (user_id, content) => {
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
    [user_id, content]
  );
};

// user_id가 필요한가
const editThread = async (thread_id, user_id, content) => {
  await AppDataSource.query(
    `
    UPDATE threads 
    SET content = ? 
    WHERE user_id = ? AND id = ? 
    `,
    [content, user_id, thread_id]
  );
};

// user_id가 필요한가
const deleteThread = async (thread_id, user_id) => {
  await AppDataSource.query(
    `
    DELETE FROM threads WHERE user_id = ? AND id = ?;
    `,
    [user_id, thread_id]
  );

  // threads 테이블을 참조하는 thread_likes 테이블과 thread_comments 테이블의 데이터 삭제가 선행된 후 threads 테이블의 데이터를 삭제해야함
};

// const deleteThread = async (thread_id, user_id) => {
//   await AppDataSource.query(
//     `
//     DELETE FROM thread_comments WHERE thread_id = ?
//
//     DELETE FROM thread_likes WHERE thread_id = ?;
//     ` +
//       `
//     DELETE FROM threads WHERE user_id = ? AND id = ?;
//     `,
//     [thread_id, thread_id, user_id, thread_id]
//   );

//   // threads 테이블을 참조하는 thread_likes 테이블과 thread_comments 테이블의 데이터 삭제가 선행된 후 threads 테이블의 데이터를 삭제해야함
// };

module.exports = { uploadThread, editThread, deleteThread };
