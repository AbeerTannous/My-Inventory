const router = require('express').Router();
const { Inventory } = require('../../models');

// GET /api/inventories
router.get('/', (req, res) => {
    Inventory.findAll()
    .then(dbInventoryData => res.json(dbInventoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/inventory/1
router.get('/:id', (req, res) => {
    
        Inventory.findOne({
          where: {
            id: req.params.id
          }
        })
          .then(dbInventoryData => {
            if (!dbInventoryData) {
              res.status(404).json({ message: 'No inventory found with this id' });
              return;
            }
            res.json(dbInventoryData);
          })
          .catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
});

// POST /api/inventories
router.post('/', (req, res) => {
    Inventory.create({
        title: req.body.title,

      })
        .then(dbInventoryData => res.json(dbInventoryData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

// PUT /api/inventories/1
router.put('/:id', (req, res) => {
    Inventory.update(
        {
          title: req.body.title,
         
        },
        {
          where: {
            id: req.params.id
          }
        }
      )
        .then(dbInventoryData => {
          if (!dbInventoryData) {
            res.status(404).json({ message: 'No inventory found with this id' });
            return;
          }
          res.json(dbInventoryData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });

});

// DELETE /api/inventories/1
router.delete('/:id', (req, res) => {
    Inventory.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(dbInventoryData => {
          if (!dbInventoryData) {
            res.status(404).json({ message: 'No inventory found with this id' });
            return;
          }
          res.json(dbInventoryData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

module.exports = router;