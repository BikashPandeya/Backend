const express = require('express')
const router = express.Router()


router.get('/home' , (req , res) => {
    res.render('home')
})


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

module.exports = router