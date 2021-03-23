const router = require('express').Router()
const { User } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

router.get('/views/auth', (req, res) => {
  res.json(req.body)
})

module.exports = router