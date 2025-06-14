const express = require('express')
const router = express.Router()


const path = require("path");
const upload = require("../config/multer.config");
const cloudinary = require("../config/cloudinary.config");
const { Readable } = require("stream");

// In-memory file store (move to DB later if needed)
const uploadedFiles = [];

router.get("/home", (req, res) => {
  res.render("home", { uploadedFiles });
});
  

router.post("/upload-file", upload.single("file"), async (req, res) => {
    try {
      const fileBuffer = req.file.buffer;
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