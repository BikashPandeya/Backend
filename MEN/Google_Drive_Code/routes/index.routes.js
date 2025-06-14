const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth');

const path = require("path");
const upload = require("../config/multer.config");
const cloudinary = require("../config/cloudinary.config");
const { Readable } = require("stream");

// In-memory file store (move to DB later if needed)
const uploadedFiles = [];
const fileModel = require("../models/files.models");


router.get("/home", authMiddleware  , (req, res) => {
  res.render("home", { uploadedFiles });
});
  

router.post("/upload-file", upload.single("file"), async (req, res) => {
    try {
      const fileBuffer = req.file.buffer;
      const newFile = await fileModel.create({
        path : req.file.path,
        originalName: req.file.originalname,
        user: req.user._id // Assuming req.user is set after authentication middleware
      })
      const stream = cloudinary.uploader.upload_stream(
        { resource_type: "auto" },
        (error, result) => {
          if (error) {
            console.error("Upload error:", error);
            return res.status(500).send("Upload Failed");
          }
  
          uploadedFiles.push(result.secure_url);
          return res.redirect("/home");
        }
      );
  
      Readable.from(fileBuffer).pipe(stream);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  });

module.exports = router