const express = require("express")
const app = express()

app.get("/users/:id", (req,res)=> {
    res.send("params example")
})

app.get("/user/search", (req,res)=> {
    console.log(req.query)
    res.send("query example")
})


app.listen(7000, ()=> {
    console.log("7000 ...")
})