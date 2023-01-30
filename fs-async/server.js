const express = require("express");
const app = express();
const { getController, addController } = require("./controller/userController");

app.use(express.json());

app.get("/get", getController);

app.post("/post", addController);

app.listen(7000, () => {
  console.log("server läuft on port 7000");
});
