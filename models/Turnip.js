const { Model, DataTypes } = require('sequelize')

const sequelize = require('../config/connection.js')

class Turnip extends Model { }

Turnip.init(
  {
    // define columns
    turnipPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    eventTime: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    chargeFee: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'turnip'
  }
)

module.exports = Turnip