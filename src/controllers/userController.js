const userService = require("../services/userService");

const signUp = async (req, res) => {
  try {
    const {
      email,
      password,
      nickname,
      phone_number,
      birth_day,
      profile_image,
    } = req.body;
    await userService.signUp(
      email,
      password,
      nickname,
      phone_number,
      birth_day,
      profile_image
    );

    res.status(201).json({ message: "successfully created user" });
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const accessToken = await userService.signIn(email, password);

    res.status(200).json({ accessToken: accessToken });
  } catch (err) {
    res.status(err.statusCode || 401).json({ message: err.message });
  }
};

module.exports = { signUp, signIn };
