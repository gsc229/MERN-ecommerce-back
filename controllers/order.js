const errorHandler = require('../helpers/dbErrorHandler')
const {CartItem, Order} = require('../models/CartItemAndOrder')

exports.create = (req, res) => {
  console.log('CREATE ORDER req.body: ', req.body)
  req.body.user = req.profile
  const order = new Order(req.body)
  order.save((error, data)=>{
    if(error){
      return res.status(400).json({
        error: errorHandler(error)
      })
    }

    res.json(data)
  })
}

