const express = require('express')
const router = express.Router()
const {requireSignIn, isAuth } = require('../controllers/auth')
const {create} = require('../controllers/order')
const {addOrderToUserHistor} = require('../controllers/user')
const {decreaseQuantity} = require('../controllers/product') // middlware to update the quantity in stock and keep track of the aggregate number of an item sold.
const { userById } = require('../controllers/user')


router.post('/order/create/:userId', requireSignIn, isAuth, decreaseQuantity ,addOrderToUserHistor, create)


router.param('userId', userById)

module.exports = router