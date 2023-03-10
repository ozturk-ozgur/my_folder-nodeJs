const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 4,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  fullname: {
    type: String,
    required: true,
    minlength: 5,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// UserSchema.methods.hashPassword = async function (password) {
//   const saltRounds = await bcrypt.genSalt(10);
//   const hashedPassword = await bcrypt.hash(password, saltRounds);
//   return hashedPassword;
// };

UserSchema.methods.comparePassword = async function (password, UserPassword) {
  const IsPassCorrect = await bcrypt.compare(password, UserPassword);
  return IsPassCorrect;
};

UserSchema.methods.createToken = async function (payload, secretKey) {
  const token = await jwt.sign(payload, secretKey, { expiresIn: "2d" });
  return token;
};

UserSchema.pre("save", async function (next) {
  const saltRounds = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, saltRounds);
  next();
});

module.exports = mongoose.model("User", UserSchema);


