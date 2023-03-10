const User = require("../models/User");
// const createError = require("http-errors");

const register = async (req, res, next) => {
  try {
    const { username, password, fullname, role } = req.body;
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).json({ message: "User already exists!" });
    }
    const user = new User({ username, password, fullname, role });
    await user.save();
    res.status(200).json({ message: "user saved!", user: user });
  } catch (error) {
    // res.status(500).json({ message: "server error" });
    next(error);
    console.log(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const userExists = await User.findOne({ username });
    if (!userExists) {
      // wenn man cookies nicht löscht, dann darf man ohne token auf protected pages zugreifen!
      res.clearCookie("token");
      return res.status(400).json({ message: "User not exists!" });
    }
    const user = await User.findOne({ username });
    const comparePassword = await user.comparePassword(password, user.password);
    if (!comparePassword) {
      return res
        .status(400)
        .json({ message: "username or password incorrect!" });
    }
    const payload = { userId: user._id, username: user.username };
    const secretKey = process.env.SECRET_KEY;
    const token = await user.createToken(payload, secretKey);
    console.log("test")
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      secure: true,
      sameSite: "Lax",
    });
    res.status(200).json({ message: "you are logged in", user, token });
  } catch (error) {
    // res.status(500).json({ message: "server error" });
    next(error);
    console.log(error);
  }
};

const admin = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const userExists = await User.findOne({ username });
    if (!userExists) {
      // wenn man cookies nicht löscht, dann darf man ohne token auf protected pages zugreifen!
      res.clearCookie("token");
      return res.status(400).json({ message: "User not exists!" });
    }
    const user = await User.findOne({ username });
    const comparePassword = await user.comparePassword(password, user.password);
    if (!comparePassword) {
      return res
        .status(400)
        .json({ message: "username or password incorrect!" });
    } 
    
    console.log("admin:","test")
    const payload = { userId: user._id, username: user.username };
    const secretKey = process.env.SECRET_KEY;
    const token = await user.createToken(payload, secretKey);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      secure: true,
      sameSite: "Lax",
    });

   console.log(user.role)
    if (user.role == "user") {
      return res.status(403).json({ message: "you are not allowed!" });
    }

    const users = await User.find();
    return res.status(200).json({ user, users, token });
  } catch (error) {
    // res.status(500).json({ message: "server error" });
    next(error);
    console.log(error);
  }
};

const loadUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select(
      "-password -_id -__v"
    );
    console.log("loading the user:", user);
    return res.json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server Error" });
  }
};

const logout = async (req, res, next) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ msg: "logged out successfully!" });
  } catch (error) {
    // res.status(500).json({ message: "server error" });
    next(error);
    console.log(error);
  }
};

module.exports = { register, login, admin, logout, loadUser };
