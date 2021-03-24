// import models
const User = require('./User.js')
const Product = require('./Turnip')



User.hasMany(Product, { foreignKey: 'uid' })
Product.belongsTo(User, { foreignKey: 'uid' })

module.exports = {
  User,
  Product
}
