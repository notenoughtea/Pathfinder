'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Routes', [
    {
      title: "Гоначхирские водопады",
      difficulty: 1,
      address: 'у. Гоначхир',
      length: 3,
      description: 'Прогулочный маршрут',
      lat: 43.26527893289815,
      lng: 41.691869401563125,
      rating: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
       {
      title: "Муруджинские озера",
      difficulty: 2,
      address: 'у. Муруджу',
      length: 10,
      description: 'Маршрут с ночевкой',
      lat: 43.326848,
      lng: 41.768818,
      rating: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
       {
      title: "Водопад Шумка",
      difficulty: 1,
      address: 'у. Гоначхир',
      length: 3,
      description: 'Прогулочный маршрут',
      lat: 43.405222650787664,
      lng: 41.73268355119764,
      rating: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }
     ])
    },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Routes');
  }
};
