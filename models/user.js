'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user.belongsToMany(models.babyTracker,
        {through: 'user_babyTracker'})
    }
  };
  user.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    babyName: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};
