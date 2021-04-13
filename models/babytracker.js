'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class babyTracker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.babyTracker.belongsToMany(models.user,
        {through: 'user_babyTracker'})
    }
  };
  babyTracker.init({
    date: DataTypes.DATE,
    timeOfFeed: DataTypes.TIME,
    duration: DataTypes.INTEGER,
    napTime: DataTypes.TIME,
    durationOfNap: DataTypes.INTEGER,
    numberOfDiapers: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'babyTracker',
  });
  return babyTracker;
};
