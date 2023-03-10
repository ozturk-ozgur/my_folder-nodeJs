const { body } = require("express-validator");
const { validationResult } = require("express-validator");

const userValidation = () => {
  return [
    body("username")
      .exists()
      .withMessage("username must be provided!")
      .toLowerCase()
      .trim(),
    body("password").exists().withMessage("password must be provided!").trim(),
    body("fullname").exists().withMessage("fullname must be provided!").trim(),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const errorMessages = [];
  errors.array().map((err) => errorMessages.push({ [err.param]: err.msg }));
  return res.status(400).json({
    errors: errorMessages,
  });
};
module.exports = { validate, userValidation };
