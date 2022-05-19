const router = require('express').Router();
const sequelize = require('../config/connection');
const { Inventory } = require('../models');

router.get('/', (req, res) => {
  Inventory.findAll({
    attributes: [
      'id',
      'title',
    ],
  
  })
    .then(dbInventoryData => {
      const inventories = dbInventoryData.map(inventory => inventory.get({ plain: true }));
      res.render('homepage', { inventories });
      
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;