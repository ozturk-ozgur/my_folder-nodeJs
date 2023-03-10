const express = require("express");
const router = express.Router();
const {
  register,
  login,
  admin,
  logout,
  loadUser,
} = require("../controllers/UserController");
const authenticate = require("../middleware/authenticate");
const isAdmin = require("../middleware/isAdmin");
const { userValidation, validate } = require("../middleware/userValidation");

router.get("/admin", authenticate, isAdmin, admin);
router.get("/auth", authenticate, loadUser);

router.post("/register", userValidation(), validate, register);
router.post("/login", login);
router.get("/logout", logout);

module.exports = router;
