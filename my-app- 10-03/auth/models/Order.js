const mongoose = require("mongoose");

const OrderSchema =new mongoose.Schema({
  orderNumber: {
    type: Number,
    required: true,
  },
  orderDate: {
    type: Date,
    default: new Date(),
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

module.exports = mongoose.model("Order", OrderSchema);
