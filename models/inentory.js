const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create inventory model
class Inventory extends Model {}

// define table columns and configuration
Inventory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    
    },
},
  {
    
    sequelize,
    
    timestamps: false,
   
    freezeTableName: true,
    
    underscored: true,
   
    modelName: 'inventory'
  }
);

module.exports = Inventory;