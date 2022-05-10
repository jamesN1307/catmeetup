const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes')
const eventRoutes = require('./eventRoutes')

router.use('/users', userRoutes)
router.use('/event', eventRoutes)

module.exports = router;