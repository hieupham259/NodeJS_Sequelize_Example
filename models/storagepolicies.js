'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes, Deferrable) => {
  class StoragePolicies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StoragePolicies.init({
    token: DataTypes.STRING,
    storage: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'StoragePolicies',
  });
  return StoragePolicies;
};