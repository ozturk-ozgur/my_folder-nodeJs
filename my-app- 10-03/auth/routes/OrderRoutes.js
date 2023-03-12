const express = require('express')
const router = express.Router();
const {addOrder} = require("../controllers/OrderController")

router.post("/addOrder", addOrder);


module.exports = router;
