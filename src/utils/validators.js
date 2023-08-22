const validateEmail = (email) => {
  const re = new RegExp(
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
  );

  if (!re.test(email)) {
    const err = new Error("invalid email");
    err.statusCode = 400;
    throw err;
  }
};
const validatePhoneNumber = (phone_number) => {
  const re = new RegExp(/^010-\d{4}-\d{4}$/);
  if (!re.test(phone_number)) {
    const err = new Error("invalid phone number");
    err.statusCode = 400;
    throw err;
  }
};

module.exports = { validateEmail, validatePhoneNumber };
