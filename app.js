const express = require('express')
const { todolists, sequelize } = require('./model/index')
const { QueryTypes } = require('sequelize')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(3000, () => {
    console.log("NodeJs project has started at port 3000")
})
