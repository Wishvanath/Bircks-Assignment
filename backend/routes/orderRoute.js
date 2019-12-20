const express = require('express');
const router = express.Router();
const {allOrders, newOrders} = require('../controllers/orderController');

// route list
router.get('/orders', allOrders);
router.post('/neworder', newOrders);






// exports this route
module.exports = router;