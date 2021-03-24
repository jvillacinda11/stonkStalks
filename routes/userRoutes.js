const router = require('express').Router()
const { User } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

router.get('/users/auth', (req, res) => {
  res.sendStatus(200)
})

router.post('/users/register', (req, res) => {
 // const { villagerName='sam', email='sam12@gmail.com', password = '123',birthday=Date.now(), islandName='Hawaii', friendCode='12', isOpen=false, username } = req.//body
  const { villagerName, email, birthday, islandName, friendCode, isOpen, username } = req.body
  User.register(new User({ villagerName, email, password, birthday, islandName, friendCode, isOpen, username }), req.body.password, err => {
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



module.exports = router