import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('Orders', { 
      orderDate: {
      type: DataTypes.DATE, 
    }, 
      shippedDate: {
      type: DataTypes.DATE, 
    }, 
      shipName: {
      type: DataTypes.STRING, 
    }, 
      shipAddress: {
      type: DataTypes.STRING, 
    }, 
      shipCity: {
      type: DataTypes.STRING, 
    }, 
      shipStateProvince: {
      type: DataTypes.STRING, 
    }, 
      shipZipPostalCode: {
      type: DataTypes.STRING, 
    }, 
      shipCountryRegion: {
      type: DataTypes.STRING, 
    }, 
      shippingFee: {
      type: DataTypes.DOUBLE, 
    }, 
      taxes: {
      type: DataTypes.DOUBLE, 
    }, 
      paymentType: {
      type: DataTypes.STRING, 
    }, 
      paidDate: {
      type: DataTypes.DATE, 
    }, 
      notes: {
      type: DataTypes.STRING, 
    }, 
      taxRate: {
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
