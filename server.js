require('dotenv').config()

const express = require('express')
// import sequelize connection
const { join } = require('path')     
const sequelize = require('./config/connection.js') 

require('./models') 
const passport = require('passport')
const { User } = require('./models')  

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(passport.initialize())
app.use(passport.session())

passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(require('./routes'))

// sync sequelize models to the database, then turn on the server
require('./config/connection.js')
  .sync()                         //{ force: true }
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(err => console.log(err))
