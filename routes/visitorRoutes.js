const router = require('express').Router()
const { Visitor } = require('../models')
const passport = require('passport')

router.get('/visitors', passport.authenticate('jwt'), (req, res) => {
  console.log(req.user.id)
})

router.post('/visitors', passport.authenticate('jwt'), (req, res) => {
  Visitor.create({
    name: req.body.name,
    uid: req.user.id
  })
    .then(item => res.json(item))
    .catch(err => console.log(err))
})

router.post('/visitors/:id', passport.authenticate('jwt'), (req, res) => {
  Visitor.create({
    name: req.user.username,
    uid: req.params.id
  })
    .then(item => res.json(item))
    .catch(err => console.log(err))
})

router.delete('/visitors/:id', passport.authenticate('jwt'), (req, res) => {
  Visitor.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router