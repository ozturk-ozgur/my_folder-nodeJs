const validUser = (req,res,next)=> {
    const {age} = req.query;
    if (age<18) {
        console.log("age invalid")
    }
    next()
}

module.exports = validUser;
