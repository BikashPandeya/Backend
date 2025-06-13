const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const userModel = require("../models/user.model"); 
const bcrypt = require("bcrypt");         
// User Routes

router.get("/register", (req, res) => {
  res.render("register");
});

router.post(
  "/register",
  body("email").trim().isEmail().isLength({min : 10}),
  body("password").trim().isLength({ min: 5 }),
  body("username").trim().isLength({ min: 3 }),
  async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message : "Invalid input data"
        });
    }

    
    const {email , username , password} = req.body;
    const hashPassword = await bcrypt.hash(password , 100)
    const newUser = await userModel.create({
        email , username ,password : hashPassword
    })
    
    res.json(newUser)
  }
);

router.get('/login' , (req , res) => {
    res.render('login')
})

router.post('/login' , 
    body('email').trim().isEmail().isLength({min : 10}),
    body('password').trim().isLength({min : 5}),
    async (req , res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message : "Invalid input data"
            });
        }

        const {email , password} = req.body;
        const user = await userModel.findOne({email});
        if(!user) {
            return res.status(404).json({message : "Username or Password is incorrect"});
        }
        
        const isPasswordValid = await bcrypt.compare(password , user.password);
        if(!isPasswordValid) {
            return res.status(400).json({message : "Username or Password is incorrect"});
        }

        res.json({message : "Login successful", user});
    }
);

module.exports = router;
