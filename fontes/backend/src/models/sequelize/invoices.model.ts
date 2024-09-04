import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('Invoices', { 
      invoiceDate: {
      type: DataTypes.DATE, 
    }, 
      dueDate: {
      type: DataTypes.DATE, 
    }, 
      tax: {
      type: DataTypes.DOUBLE, 
    }, 
      shipping: {
      type: DataTypes.DOUBLE, 
    }, 
      amountDue: {
      type: DataTypes.DOUBLE, 
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
