'use strict';
const db = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return db.food.bulkCreate([
      { name: 'Margarita', price: 2300, categoryId: 5 },
      { name: 'Pepperoni', price: 1500, categoryId: 5 },
      { name: 'Tiramissu', price: 1000, categoryId: 2 },
      { name: 'Ceasar', price: 1500, categoryId: 1 },
      { name: 'Long island iced tea', price: 3000, categoryId: 4 },
      { name: 'Mohito', price: 1500, categoryId: 4 },
      { name: 'Napoleon', price: 800, categoryId: 2 },
      { name: 'Diablo', price: 1500, categoryId: 5 },
      { name: 'Pumpkin soup', price: 800, categoryId: 3 },
      { name: 'Tomato soup', price: 700, categoryId: 3 },
      { name: 'Spas', price: 600, categoryId: 3 },
      { name: 'AUA', price: 1000, categoryId: 1 }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('food');
  }
};
