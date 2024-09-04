import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('SalesReports', { 
      display: {
      type: DataTypes.STRING, 
    }, 
      title: {
      type: DataTypes.STRING, 
    }, 
      filterRowSource: {
      type: DataTypes.STRING, 
    }, 
      padrao: {
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
