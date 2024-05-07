import mongoose from "mongoose";
import express  from "express";
let conn = await mongoose.connect("mongodb://localhost:27017/Todo");
import  {Todo} from "./models/Todo.js";
const app = express();
const port = 3000;


app.get('/', (req, res)=>{
  const todo  = new Todo({name :'Sidra' , Description : 'This is new todo' , IsCompleted :false})
  todo.save();
  res.send('Helloworld')
})

app.listen(port , ()=>{
  console.log(`The server is running at port http://localhost:${port}`);
})