const router = require('express').Router()
const mongoose = require('mongoose')
const Todos = require('../models/Todo')

router.get('/', async (req, res) => {
    const todos = await Todos.find()
    res.send(todos)
})

router.post('/', async (req, res) => {

    //destructurize req.body fields
    const { title, completed } = req.body

    //create new Todo
    const newTodo = {
        title,
        completed
    }

    const result = await Todos.create(newTodo)
    res.send(result)
})

router.delete('/:id', async (req, res) => {
    //get an id
    const id = req.params.id
    console.log(id)
    const result = await Todos.deleteOne({ _id: id })
    res.send()
})

router.get(`/limit/:limit`, async (req, res) => {

    const result = await Todos.find({}).limit(parseInt(req.params.limit))
    res.send(result)
})

router.put(`/:id`, async(req, res) => {

    const updTodo = await Todos.findOne({_id:req.params.id})

    const state = !updTodo.completed

    await Todos.updateOne({_id: req.params.id}, {completed: state})

    const result = await Todos.find()
    res.send(result)
})

module.exports = router