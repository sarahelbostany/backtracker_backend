'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_babyTracker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user_babyTracker.init({
    userId: DataTypes.INTEGER,
    babyTrackerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user_babyTracker',
  });
  return user_babyTracker;
};