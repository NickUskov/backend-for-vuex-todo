const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const todoRoutes = require('./routes/api.todos')

const app = express()


//DB connection
mongoose.connect(
    process.env.DB,
    { useNewUrlParser: true, useFindAndModify: true},
    (err) => { if (err) console.log(err) })

app.use(express.json())
app.use(cors())

//Routes for todos
app.use('/api/todos', todoRoutes)

app.listen(process.env.PORT, () => console.log(`Server is running on ${process.env.PORT}`))