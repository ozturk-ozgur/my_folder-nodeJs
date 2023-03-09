const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;
const authenticate = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(400).send({ message: "server error, no token" });
    }
    const decode = jwt.verify(token, SECRET_KEY);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "server error" });
  }
};

module.exports = authenticate;