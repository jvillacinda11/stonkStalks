const { Model, DataTypes } = require('sequelize')

const sequelize = require('../config/connection.js')

class Turnip extends Model { }

Turnip.init(
  {
    // define columns
    DodoCode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TurnipPrice: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    eventTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Discord: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    VisitorLimit: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    QueueLimit: {
      type: DataTypes.INTEGER,
      allowNull: false
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