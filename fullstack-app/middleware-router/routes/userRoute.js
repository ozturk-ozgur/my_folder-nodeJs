const express = require("express")
const router = express.Router()
const {getUsers,newUser,updateUser} = require("../controller/userController")


router.route("/all").get(getUsers)
router.route("/add").post(newUser)
router.route("/update/:id").put(updateUser)





module.exports = router;