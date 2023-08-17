const { AppDataSource } = require("./data-source");

const createUser = async (
  email,
  password,
  nickname = "Name",
  phone_number,
  birth_day,
  profile_image = process.env.DEFAULT_PROFILE_IMAGE
) => {
  await AppDataSource.query(
    `
    INSERT INTO users (
      email,
      password,
      nickname,
      phone_number,
      birth_day,
      profile_image
    ) VALUES (
      ?,?,?,?,?,?
    )
    `,
    [email, password, nickname, phone_number, birth_day, profile_image]
  );
};

const getUserByEmail = async (email) => {
  const [user] = await AppDataSource.query(
    `
      SELECT u.id, u.nickname, u.email, u.password, u.phone_number, u.birth_day, u.profile_image, u.created_at, u.updated_at
      FROM users u
      WHERE u.email = ?
    `,
    [email]
  );

  return user;
};
const getUserById = async (id) => {
  const [user] = await AppDataSource.query(
    `
      SELECT u.id, u.nickname, u.email, u.password, u.phone_number, u.birth_day, u.profile_image, u.created_at, u.updated_at
      FROM users u
      WHERE u.id = ?
    `,
    [id]
  );

  return user;
};

module.exports = { createUser, getUserByEmail, getUserById };
