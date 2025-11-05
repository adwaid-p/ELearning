const express = require("express");
const router = express.Router();

router.get('/userRoute',(req,res)=>{
    res.send("User Route")
})

module.exports = router;