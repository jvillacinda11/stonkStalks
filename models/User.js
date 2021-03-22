const { Model, DataTypes } = require('sequelize')

const sequelize = require('../config/connection.js')

class User extends Model { }

User.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
)

module.exports = User