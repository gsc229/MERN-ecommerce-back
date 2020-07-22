const errorHandler = require('../helpers/dbErrorHandler')
const {CartItem, Order} = require('../models/CartAndOrders')

exports.create = (req, res) => {
  console.log('CREATE ORDER req.body: ', req.body)
}

