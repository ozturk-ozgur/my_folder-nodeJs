const express = require("express");
const app = express();
const users = require("./users.js");

// app.get("/users/:id", (req,res)=> {
//     res.send("params example")
// })

app.get("/users/query", (req, res) => {
  console.log(req.query);
  const { limit, search } = req.query;
  let filteredUser = [...users];

  if (search) {
    filteredUser = filteredUser.filter((user) => user.name.startsWith(search.toLowerCase()) || user.name.startsWith(search.toUpperCase()));
  }
  if (limit) {
    filteredUser = filteredUser.slice(0, Number(limit));
  }

  if(filteredUser.length < 1) {
    // res.send("no users matched your search")
   return res.status(200).json({ success : true,data : []})
  }
  res.json(filteredUser);
});

app.listen(7000, () => {
  console.log("7000 ...");
});
