'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Routes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      url: {
        type: Sequelize.STRING,
      },// + Roma
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      difficulty: {
        type: Sequelize.INTEGER,
      },
      rating: {
        type: Sequelize.INTEGER,
      },
      address: {
        type: Sequelize.STRING,
      },
      length: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.TEXT,
      },
<<<<<<< HEAD
      lng: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      lat: {
        type: Sequelize.DOUBLE,
=======
      lat: {
        type: Sequelize.NUMERIC,
        allowNull: false,
      },
      lng: {
        type: Sequelize.NUMERIC,
>>>>>>> 956b8873685e97482d0d9c5ec04e586800be0e46
        allowNull: false,
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
    await queryInterface.dropTable('Routes');
  }
};
