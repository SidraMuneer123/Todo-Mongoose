import mongoose from 'mongoose';
const TodoSchema = new mongoose.Schema({
  name : String,
  Description : String,
  IsCompleted : Boolean
})

export const Todo = mongoose.model('Todo' , TodoSchema)