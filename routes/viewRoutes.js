const router = require('express').Router()
const { User } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const { join } = require('path')

router.get('/login', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'login.html'))
})

router.get('/register', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'register.html'))
})

// router.get('/loading', (req, res) => {
//   res.sendFile(join(__dirname, '..', 'public', 'loading.html'))
// })

router.get('/host', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'host.html'))
})


router.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'index.html'))
})

module.exports = router