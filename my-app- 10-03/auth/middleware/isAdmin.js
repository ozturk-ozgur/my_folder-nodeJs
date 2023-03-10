const User = require("../models/User");

const isAdmin = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const user = await User.findById(userId);
    if (user.role !== "admin") {
      return res.status(403).json({ message: "you are not allowed!" });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "server error" });
  }
};

module.exports = isAdmin;
