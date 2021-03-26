const router = require('express').Router()
const { User, Turnip } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

// router.get('/turnips/test', (req, res) => {
//   console.log('Turnip test is working!')
// })

//GET all turnips
router.get('/turnips', passport.authenticate('jwt'), (req, res) => {
  Turnip.findAll({ where: { uid: req.user.id } })
    .then(turnips => res.json(turnips))
    .catch(err => console.log(err))
})

//GET one turnips
router.get('/turnips/:id', passport.authenticate('jwt'), (req, res) => {
  Turnip.findOne({ where: { id: req.params.id } })
    .then(item => res.json(turnip))
    .catch(err => console.log(err))
})

//POST one turnip
router.post('/turnips', passport.authenticate('jwt'), (req, res) => {
// router.post('/turnips', (req, res) => {
  Turnip.create({
    DodoCode: req.body.DodoCode,
    TurnipPrice: req.body.TurnipPrice,
    eventTime: req.body.eventTime,
    Discord: req.body.Discord,
    VisitorLimit: req.body.VisitorLimit,
    QueueLimit: req.body.QueueLimit,
    // uid: 1
    uid: req.user.id                  
  })
    .then(turnip => res.json(turnip))
    .catch(err => console.log(err))
})

module.exports = router