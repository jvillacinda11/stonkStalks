const User = require('./User.js')
const Product = require('./Product.js')
const Category = require('./Category')

User.hasMany(Product)
Product.belongsTo(User)
Category.hasMany(Product, { foreignKey: 'categoryId' })



module.exports = { User, Product, Category }