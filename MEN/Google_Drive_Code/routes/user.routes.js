const express = require ('express');
const router = express.Router();
const {body , validationResult } = require('express-validator');

// User Routes

router.get("/register" , (req , res) =>{
    res.render("register")
})

router.post("/register" , (req , res) => {
    body('email').trim().isEmail()
    console.log(req.body);
    res.send("User Registered Successfully");
})

module.exports = router;