import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('InventoryTransactions', { 
      transactionCreatedDate: {
      type: DataTypes.DATE, 
    }, 
      transactionModifiedDate: {
      type: DataTypes.DATE, 
    }, 
      quantity: {
      type: DataTypes.INTEGER, 
    }, 
      comments: {
      type: DataTypes.STRING, 
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
