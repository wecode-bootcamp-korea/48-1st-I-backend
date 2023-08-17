const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userDao = require("../models/userDao");
const { validateEmail } = require("../utils/validators"); 

const signUp = async (email, password) => {
  validateEmail(email);
  const user = await userDao.getUserByEmail(email);

  if (user) {
    const err = new Error("duplicated email");
    err.statusCode = 400;
    throw err;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await userDao.createUser(email, hashedPassword); 
};

const signIn = async (email, password) => {
  const user = await userDao.getUserByEmail(email);

  if (!user) {
    const err = new Error("specified user does not exist");
    err.statusCode = 404;
    throw err;
  }

  const result = await bcrypt.compare(password, user.password);

  if (!result) {
    const err = new Error("invalid password");
    err.statusCode = 401;
    throw err;
  }

  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET);
};

const getUserById = async(id) =>{
  const user  = await userDao.getUserById(id);
  return user;
}

module.exports = { signUp, signIn , getUserById};
