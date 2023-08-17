const { AppDataSource } = require("./data-source");

const createUser = async (
  email,
  password,
  nickname,
  phone_number,
  birth_day,
  profile_image
) => {
  if (nickname === undefined) nickname = "Name";
  if (profile_image === undefined)
    profile_image =
      "https://png.pngtree.com/png-clipart/20210129/ourmid/pngtree-default-male-avatar-png-image_2811083.jpg";

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
