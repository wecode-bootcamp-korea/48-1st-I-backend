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
