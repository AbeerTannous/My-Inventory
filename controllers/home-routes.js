const router = require('express').Router();
const sequelize = require('../config/connection');
const { Inventory } = require('../models');
// getting all inventories
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


//getting inventories for the edit page 
router.get('/edit/:id', (req, res) => {
  Inventory.findByPk(req.params.id, {
    attributes: [
      'id',
      'title' 
    ],
  })
    .then(dbInventoryData => {
      if (dbInventoryData) {
        const inventory = dbInventoryData.get({ plain: true });
        
        res.render('edit-inventory', {
          inventory 
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});



module.exports = router;