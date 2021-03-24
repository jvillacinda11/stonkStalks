const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./turnipRoutes.js'))
router.use('/', require('./viewRoutes.js'))

module.exports = router
