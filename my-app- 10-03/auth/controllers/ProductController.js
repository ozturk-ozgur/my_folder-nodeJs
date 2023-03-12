const Product = require("../models/Product");

const addProduct = async (req, res) => {
  try {
    const { productName, price, isStok, inStock } = req.body;
    const newProduct = new Product({ productName, price, isStok, inStock });
    await newProduct.save();
    res
      .status(201)
      .json({ message: "new product saved successfully" }, newProduct);
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};

module.exports = { addProduct };
