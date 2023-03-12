const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
   
  },
  isStok: {
    type: Boolean,
    required:true,
  },
  inStock: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  }
});

module.exports = mongoose.model("Product", ProductSchema);

