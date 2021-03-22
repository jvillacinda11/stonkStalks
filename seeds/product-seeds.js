const { Product } = require('../models')

const productData = [
  {
    product_name: 'Basic Painting',
    price: 14.99,
    stock: 14,
    categoryId: 1
  },
  {
    product_name: 'Adventure Dress',
    price: 90.0,
    stock: 25,
    categoryId: 2
  },
  {
    product_name: 'Black Roses',
    price: 12.99,
    stock: 12,
    categoryId: 3
  },
  {
    product_name: 'Ammonite',
    price: 52.99,
    stock: 50,
    categoryId: 4
  },
  {
    product_name: 'Admiral Poster',
    price: 49.99,
    stock: 22,
    categoryId: 5
  }
]

const seedProducts = () => Product.bulkCreate(productData)

module.exports = seedProducts
