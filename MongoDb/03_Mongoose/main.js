import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

 let conn =await mongoose.connect("mongodb://localhost:27017/todo")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({ desc : "Description man" , isDone : false , days : Math.random()*45+Math.random()})
    todo.save()
  res.send('Hello World!')
})

app.get('/a', async (req, res) => {
    let todo =await Todo.findOne({})
  res.json({title : todo.name , desc : todo.desc})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

