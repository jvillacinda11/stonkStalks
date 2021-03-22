const { Product } = require('../models')

const productData = [
  {
    product_name: 'Basic Painting',
    price: 14.99,
    stock: 14,
    category_id: 1
  },
  {
    product_name: 'Adventure Dress',
    price: 90.0,
    stock: 25,
    category_id: 2
  },
  {
    product_name: 'Black Roses',
    price: 12.99,
    stock: 12,
    category_id: 3
  },
  {
    product_name: 'Ammonite',
    price: 52.99,
    stock: 50,
    category_id: 4
  },
  {
    product_name: 'Admiral Poster',
    price: 49.99,
    stock: 22,
    category_id: 5
  }
]

const seedProducts = () => Product.bulkCreate(productData)

module.exports = seedProducts
