const router = require('express').Router()
const { User } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

router.get('/turnips/test', (req, res) => {
  console.log('Turnip test is working!')
})

module.exports = router