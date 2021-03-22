const pls = require('passport-local-sequelize')

const { DataTypes } = require('sequelize')

const sequelize = require('../config/connection')


const User = pls.defineUser(sequelize, {
  name: DataTypes.STRING,
  email: DataTypes.STRING

})

module.exports = User