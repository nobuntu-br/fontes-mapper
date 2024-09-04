import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('Products', { 
      supplierIds: {
      type: DataTypes.STRING, 
    }, 
      productCode: {
      type: DataTypes.STRING, 
    }, 
      productName: {
      type: DataTypes.STRING, 
    }, 
      description: {
      type: DataTypes.STRING, 
    }, 
      standardCost: {
      type: DataTypes.DOUBLE, 
    }, 
      listPrice: {
      type: DataTypes.DOUBLE, 
    }, 
      reorderLevel: {
      type: DataTypes.INTEGER, 
    }, 
      targetLevel: {
      type: DataTypes.INTEGER, 
    }, 
      quantityPerUnit: {
      type: DataTypes.STRING, 
    }, 
      discontinued: {
      type: DataTypes.BOOLEAN, 
    }, 
      minimumReorderQuantity: {
      type: DataTypes.INTEGER, 
    }, 
      category: {
      type: DataTypes.STRING, 
    }, 
      attachments: {
      type: DataTypes.STRING, 
    }, 
      defaultDiscount: {
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
