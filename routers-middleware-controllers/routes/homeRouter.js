const express = require("express")
const router = express.Router()


router.route("/home").get((req,res)=> {
    console.log(true)
})

module.exports = router;
