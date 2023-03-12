const express = require('express')
const router = express.Router();
const {addProduct} = require("../controllers/ProductController")

router.post("/createProduct", addProduct);


module.exports = router;
