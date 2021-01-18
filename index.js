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

app.use('/companies', require('./routes/companies'))
app.use('/employees', require('./routes/employees'))

if (process.env.NODE_ENV !== 'test') {
  sequelize
    .sync()
    .then(() => {
      console.log(
        'Connection succesfully established with: ' +
          sequelize.getDatabaseName(),
      )
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err)
    })
}

module.exports = app
