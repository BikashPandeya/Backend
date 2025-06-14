const express = require('express');
const userRouter = require('./routes/user.routes');
const dotenv = require('dotenv')
dotenv.config();
const connectToDB = require('./config/db');
connectToDB();
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index.routes');

const path = require("path");
const upload = require("./config/multer.config");
const cloudinary = require("./config/cloudinary.config");
const { Readable } = require("stream");


const app = express();

app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user" , userRouter);
app.use("/" , indexRouter);





//**************************CLoudinary and file upload*********************** */



// Middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public"))); // if needed

// Routes
app.get("/", (req, res) => {
  res.render("home");
});

app.post("/upload-file", upload.single("file"), async (req, res) => {
  try {
    const fileBuffer = req.file.buffer;

    const stream = cloudinary.uploader.upload_stream(
      { resource_type: "auto" },
      (error, result) => {
        if (error) {
          console.error("Upload error:", error);
          return res.status(500).send("Upload Failed");
        }

        console.log("File uploaded:", result.secure_url);
        return res.send(`File uploaded successfully: <a href="${result.secure_url}" target="_blank">View File</a>`);
      }
    );

    Readable.from(fileBuffer).pipe(stream);
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  }
});



//***************************************************************************** */




app.listen(3000 , () => {
    console.log("Server is running on port 3000");
})

