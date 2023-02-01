const fs = require("node:fs/promises");

const getUsers = async (req, res) => {
  try {
    let users = await fs.readFile("./data.json", "utf8");
    let updatedUsers = JSON.parse(users);
    res.status(200).json({ success: true, updatedUsers });
  } catch (error) {
    console.log(error);
  }
};

const newUser = async (req, res) => {
  try {
    let users = await fs.readFile("./data.json", "utf8");
    let updatedUsers = JSON.parse(users);
    const { name, age } = req.body;
    updatedUsers.push({ name, age });
    let stringfyUsers = JSON.stringify(updatedUsers);
    await fs.writeFile("./data.json", stringfyUsers);
    res.status(200).json({ success: true, updatedUsers });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
    try {
      let users = await fs.readFile("./data.json", "utf8");
      let {id} = req.params
      let updatedUsers = JSON.parse(users);
      const { name, age } = req.body;
      updatedUsers[id].name = name;
      updatedUsers[id].age = age;
      let stringfyUsers = JSON.stringify(updatedUsers);
      await fs.writeFile("./data.json", stringfyUsers);
      res.status(200).json({ success: true, updatedUsers });
    } catch (error) {
      console.log(error);
    }
  };


module.exports = {getUsers, newUser, updateUser};
