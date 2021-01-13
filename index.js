require('dotenv').config()
const express = require('express')
const { sequelize } = require('./models/index')
const compression = require('compression')
const helmet = require('helmet')
const cors = require('cors')
const app = express()

app.set('port', 4000)
app.use(helmet())
app.use(compression())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

module.exports = app
