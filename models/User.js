const pls = require('passport-local-sequelize')
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection.js')

const User = pls.defineUser(sequelize, {
  villagerName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthday: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  islandName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  friendCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isOpen: {
    type: DataTypes.BOOLEAN
  }
})

module.exports = User