import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

const app= express()
dotenv.config();

app.use(cors());
app.use(express.json());

const uri = process.env.uri;
mongoose.set("strictQuery", true);


const connect = () => {
  mongoose.connect(uri);
};

const User = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

app.post("/api/users", async (req, res) => {
    try {
      const data = await User.create(req.body);
      res.status(201).json(data);
    } catch (err) {
      res.status(500).json({ msg: "false", err });
    }
  });

app.get("/api/users", async (req, res) => {
  try {
    const data = await User.find({});
    res.status(200).json({ msg: success }, data);
  } catch (err) {
    res.status(500).json({ msg: "false" }, err);
  }
});


const start = async () => {
  try {
    await connect();
    app.listen(2000, () => {
      console.log("server works on port 2000");
    });
  } catch (err) {
    console.log(err);
  }
};

start();
