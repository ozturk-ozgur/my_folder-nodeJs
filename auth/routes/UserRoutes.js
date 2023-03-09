const express = require("express");
const router = express.Router();
const { register, login, getUsers,admin } = require("../controllers/UserController");
const authenticate = require("../middleware/authenticate");
const isAdmin = require("../middleware/isAdmin");
const {userValidation,validate} = require("../middleware/userValidation");

router.get("/home");
router.get("/all", authenticate, isAdmin, getUsers);
router.post("/login", login);
router.post("/admin", authenticate,isAdmin, admin);
router.post("/register",userValidation(),validate, register);
router.get("/dashboard");

module.exports = router;
