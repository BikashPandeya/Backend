import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    name: {type : String , required : true , default : "Heyy"} ,
    desc : String ,
    isDone : Boolean,
    days : Number
  });
  
export const  Todo = mongoose.model('todo', todoSchema);