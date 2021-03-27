const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection.js')

class Visitor extends Model { }

Visitor.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'visitor'
  }
)

module.exports = Visitor