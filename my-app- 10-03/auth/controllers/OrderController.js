const Order = require("../models/Order");

const addOrder = async (req, res, next) => {
  try {
    const { orderNumber, orderDate } = req.body;
    const newOrder = new Order({orderNumber, orderDate});
    await newOrder.save();
    res.status(201).json({ message: "new order saved successfully" ,newOrder});
  } catch (error) {
    console.log(error)
   res.status(500).json({ message: "server error"})
  }
};

module.exports = { addOrder };
