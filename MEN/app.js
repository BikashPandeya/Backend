const express = require('express');
const app = express();
const morgan = require("morgan")
const userModel = require("./models/user") // Assuming you have a user model defined in models/user.js
const dbConnection = require("./config/db")

app.use(morgan("dev"))

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static("public")) // for serving static files


app.set("view engine" , "ejs");

app.use((req , res , next) => {

    // console.log("This is a middleware")
    // console.log(5+6)
    return next()
})

app.get("/" ,(req , res ,next) => {
    next()
}, (req , res) => {
    res.render("index")
    // res.send("Example of middlware")
})
app.get("/about" , (req , res) => {
    res.send("About Page")
})
app.get("/contact" , (req , res) => {
    res.send("Contact Page")
})
app.get("/profile" , (req , res) => {
    res.send("Profile Page")
})

app.post("/form" , (req , res) => {
    console.log(req.body)
    res.send("Data Received")
})


app.get("/register" ,(req , res) => {
    res.render("register")
})
app.post("/register" , async(req , res) => {
    const { username, email, password } = req.body;
    const NewUser = await userModel.create({
        username : username,
        email : email,      
        password : password
    })
    res.send(NewUser)
})

app.get("/get-users" , (req,res) => {
    // userModel.find({
    //     username  :"Bikash"
    // }).then((users) => {
    //     res.send(users)
    // })
    userModel.findOne({
        username: "Bikash"
    }).then((user) => {
    res.send(user)
    })
})

app.get("/update-user" ,async (req,res) => {
    const update = await userModel.findOneAndUpdate({
        username : "Bikash"
    },
    {
        email : "update@gmail.com"
    })
    res.send(update)
})

app.get("/delete-user" , async (req,res) => {
    const deleted = await userModel.findOneAndDelete({
        username : "Bikash"
    })
    res.send(deleted)
})

app.listen(3000)







