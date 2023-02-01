const express = require("express")
const homeRoute = require("./routes/homeRoute")
const userRoute = require("./routes/userRoute")

const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.use("/home", homeRoute)
app.use("/users", userRoute)


app.listen("8000",()=> {
    console.log("server listening on port 8000")
})