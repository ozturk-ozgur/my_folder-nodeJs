const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Task = require("./models/Task");

app.use(express.json());
mongoose.set("strictQuery", true);

const connectDB = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/Task-Manager");
};

app.post("/", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({msg : err})
  }
});


app.get("/", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json({msg : err})
  }
});

const start = async () => {
  try {
    await connectDB();
    app.listen(7000, () => {
      console.log("server on port 7000");
    });
  } catch (err) {
    console.log(err);
  }
};

start();
