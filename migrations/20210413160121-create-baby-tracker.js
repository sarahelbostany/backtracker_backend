'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('babyTrackers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      timeOfFeed: {
        type: Sequelize.TIME
      },
      duration: {
        type: Sequelize.INTEGER
      },
      napTime: {
        type: Sequelize.TIME
      },
      durationOfNap: {
        type: Sequelize.INTEGER
      },
      numberOfDiapers: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('babyTrackers');
  }
};
