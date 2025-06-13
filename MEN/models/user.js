const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username : String,
    email : String,
    password : String,
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel
// This code defines a Mongoose schema and model for a User in a MongoDB database.