const express = require("express")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv")
const validUser = require("./middleware/userValidation")
const userControll = require("./controllers/userControllers")
const homeRouter = require("./routes/homeRouter")


dotenv.config()
app.use(cors())
app.use(express.json())


app.use("/", validUser, userControll , homeRouter)

app.listen("4000", console.log("on port 4000"))