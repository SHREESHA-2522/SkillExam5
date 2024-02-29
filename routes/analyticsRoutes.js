const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');

router.get('/analytics/daily-food-orders', analyticsController.getDailyFoodOrders);

module.exports = router;