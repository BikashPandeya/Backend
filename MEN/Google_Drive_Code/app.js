const express = require('express');
const userRouter = require('./routes/user.routes');
<<<<<<< HEAD
const dotenv = require('dotenv')
dotenv.config();
const connectToDB = require('./config/db');
connectToDB();

=======
>>>>>>> c51dd831058e4ded7127ebb67ef64954deb18930

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user" , userRouter);

app.listen(3000 , () => {
    console.log("Server is running on port 3000");
})