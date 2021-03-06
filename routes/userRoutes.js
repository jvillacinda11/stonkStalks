const router = require('express').Router()
const { User } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

router.get('/users/auth', passport.authenticate('jwt'), (req, res) => {
  res.json(req.user)
})

router.get('/users/:username', (req, res) =>{
  User.findAll({ where: {username: req.params.username}})
  .then(user => res.json(user))
  .catch(err => console.log(err))
})

router.get('/users1/:islandName', (req, res) => {
  User.findAll({ where: { islandName: req.params.islandName } })
    .then(user => res.json(user))
    .catch(err => console.log(err))
})

router.post('/users/register', (req, res) => {
  const { username, birthday, villagerName, islandName, email, friendCode } = req.body
  User.register(new User({ username, birthday, villagerName, islandName, email, friendCode, isOpen: false }), req.body.password, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})


router.post('/users/login', (req, res) => {
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
    if (err) { console.log(err) }
    res.json(user ? jwt.sign({ id: user.id }, process.env.SECRET) : null)
  })
})

router.put('/users', passport.authenticate('jwt'), (req, res) => {
  User.update(req.body, { where: { id: req.user.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

router.delete('/users', passport.authenticate('jwt'), (req, res) => {
  User.destroy({ where: { id: req.user.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router