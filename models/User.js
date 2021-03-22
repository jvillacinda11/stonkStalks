cons pls = require('passport-local-sequelize')
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection.js')

const User = pls.defineUser(sequelize, {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  islandName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isOpen: {
    type: DataTypes.BOOLEAN
  }
})

module.exports = User