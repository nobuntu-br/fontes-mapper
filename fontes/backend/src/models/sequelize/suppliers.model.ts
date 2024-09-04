import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('Suppliers', { 
      company: {
      type: DataTypes.STRING, 
    }, 
      lastName: {
      type: DataTypes.STRING, 
    }, 
      firstName: {
      type: DataTypes.STRING, 
    }, 
      emailAddress: {
      type: DataTypes.STRING, 
    }, 
      jobTitle: {
      type: DataTypes.STRING, 
    }, 
      businessPhone: {
      type: DataTypes.STRING, 
    }, 
      homePhone: {
      type: DataTypes.STRING, 
    }, 
      mobilePhone: {
      type: DataTypes.STRING, 
    }, 
      faxNumber: {
      type: DataTypes.STRING, 
    }, 
      address: {
      type: DataTypes.STRING, 
    }, 
      city: {
      type: DataTypes.STRING, 
    }, 
      stateProvince: {
      type: DataTypes.STRING, 
    }, 
      zipPostalCode: {
      type: DataTypes.STRING, 
    }, 
      countryRegion: {
      type: DataTypes.STRING, 
    }, 
      webPage: {
      type: DataTypes.STRING, 
    }, 
      notes: {
      type: DataTypes.STRING, 
    }, 
      attachments: {
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
