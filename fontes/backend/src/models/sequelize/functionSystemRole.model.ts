import { Sequelize, DataTypes } from "sequelize";

export default function defineModel(sequelize: Sequelize) {
  const schema = sequelize.define('FunctionSystemRole', {
    roleId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Roles',
        key: 'id',
      },
      primaryKey: true,
    },
    functionSystemId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'FunctionSystems',
        key: 'id',
      },
      primaryKey: true,
    },
    authorized: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  }, {
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ['roleId', 'functionSystemId'],
      },
    ],
  });

  schema.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());

    values.id = values.id;
    delete values._id;
    delete values.__v;
    return values;
  };

  return schema;
};
