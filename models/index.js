// import models
const User = require('./User.js')
const Turnip = require('./Turnip')  //this should be Turnip.js  //is Product going to take becuse frontend has turnip
const Visitor = require('./Visitor.js')

User.hasMany(Turnip, { foreignKey: 'uid' })
Turnip.belongsTo(User, { foreignKey: 'uid' })

User.hasMany(Visitor, { foreignKey: 'uid' })
Visitor.belongsTo(User, { foreignKey: 'uid' })

module.exports = {
  User,
  Turnip,
  Visitor
}
