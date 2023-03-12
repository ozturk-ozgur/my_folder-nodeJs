const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const connect = require("./connection");
const cookieParser = require("cookie-parser");
const UserRoutes = require("./routes/UserRoutes");
const ProductRoutes = require("./routes/ProductRoutes");
const OrderRoutes = require("./routes/OrderRoutes");

app.use(cors());

app.use(cookieParser());
app.use(express.json());
app.use("/api/v1", UserRoutes);
app.use("/api/v1", ProductRoutes);
app.use("/api/v1", OrderRoutes);

const URI = process.env.MONGO_URI;

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.send({ error: error });
});

const start = async () => {
  await connect(URI);
  app.listen(process.env.PORT || 4000, () => {
    console.log("server listening on port " + process.env.PORT);
  });
};

start();
