const express = require('express')
const router = express.Router()
const {requireSignIn, isAuth } = require('../controllers/auth')
const {create} = require('../controllers/order')
const {addOrderToUserHistor} = require('../controllers/user')
const { userById } = require('../controllers/user')


router.post('/order/create/:userId', requireSignIn, isAuth, addOrderToUserHistor, create)


router.param('userId', userById)

module.exports = router