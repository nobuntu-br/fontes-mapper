import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('PurchaseOrderDetails', { 
      quantity: {
      type: DataTypes.DOUBLE, 
    }, 
      unitCost: {
      type: DataTypes.DOUBLE, 
    }, 
      dateReceived: {
      type: DataTypes.DATE, 
    }, 
      postedToInventory: {
      type: DataTypes.BOOLEAN, 
    }, 
  }); 
  schema.prototype.toJSON = function() { 
    const values = Object.assign({}, this.get()); 

    values.id = values.id; 
    delete values._id; 
    delete values.__v; 
    return values; 
  }; 

  return schema; 
};
