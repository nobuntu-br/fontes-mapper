import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('OrderDetails', { 
      quantity: {
      type: DataTypes.DOUBLE, 
    }, 
      unitPrice: {
      type: DataTypes.DOUBLE, 
    }, 
      discount: {
      type: DataTypes.DOUBLE, 
    }, 
      dateAllocated: {
      type: DataTypes.DATE, 
    }, 
      purchaseOrderId: {
      type: DataTypes.INTEGER, 
    }, 
      inventoryId: {
      type: DataTypes.INTEGER, 
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
