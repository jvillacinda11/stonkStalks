const { Category } = require('../models')

const categoryData = [
  {
    category_name: 'Art'
  },
  {
    category_name: 'Clothing'
  },
  {
    category_name: 'Flowers'
  },
  {
    category_name: 'Fossils'
  },
  {
    category_name: 'Posters'
  }
]

const seedCategories = () => Category.bulkCreate(categoryData)

module.exports = seedCategories
