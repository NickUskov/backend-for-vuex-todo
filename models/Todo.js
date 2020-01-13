const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todosSchema = new Schema({
    title: String,
    body: String,
    completed: Boolean
})

const Todo = mongoose.model('Todo', todosSchema)
module.exports = Todo