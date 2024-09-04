import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('PurchaseOrders', { 
      submittedDate: {
      type: DataTypes.DATE, 
    }, 
      creationDate: {
      type: DataTypes.DATE, 
    }, 
      expectedDate: {
      type: DataTypes.DATE, 
    }, 
      shippingFee: {
      type: DataTypes.DOUBLE, 
    }, 
      taxes: {
      type: DataTypes.DOUBLE, 
    }, 
      paymentDate: {
      type: DataTypes.DATE, 
    }, 
      paymentAmount: {
      type: DataTypes.DOUBLE, 
    }, 
      paymentMethod: {
      type: DataTypes.STRING, 
    }, 
      notes: {
      type: DataTypes.STRING, 
    }, 
      approvedBy: {
      type: DataTypes.INTEGER, 
    }, 
      approvedDate: {
      type: DataTypes.DATE, 
    }, 
      submittedBy: {
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
