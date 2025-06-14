const express = require('express');
const userRouter = require('./routes/user.routes');
const dotenv = require('dotenv')
dotenv.config();
const connectToDB = require('./config/db');
connectToDB();
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index.routes');
    const path = require("path");



const app = express();

app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user" , userRouter);
// Middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public"))); // if needed
app.use("/" , indexRouter);

app.listen(3000 , () => {
    console.log("Server is running on port 3000");
})

