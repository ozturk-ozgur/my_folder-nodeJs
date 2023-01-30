const fs = require("node:fs/promises");

const getController = async (req, res) => {
  console.log(123);
  try {
    let data = await fs.readFile("./user.json", "utf8");
    res.json(JSON.parse(data));
  } catch (error) {
    console.log(error);
  }

  console.log(true);
};

const addController = async (req, res) => {
  try {
    let data = await fs.readFile("./user.json", "utf-8");
    let dataObj = JSON.parse(data);
    let { name, email } = req.body;
    dataObj.push({ name, email });
    await fs.writeFile("./user.json", JSON.stringify(dataObj));
    res.json({ msg: "success" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getController, addController };
