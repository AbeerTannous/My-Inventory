const router = require('express').Router();

const inventoryRoutes = require('./inventory-routes.js');

router.use('/inventories', inventoryRoutes);

module.exports = router;