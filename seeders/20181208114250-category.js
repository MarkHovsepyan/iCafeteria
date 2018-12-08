'use strict';
const db = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return db.category.bulkCreate([
      { name: 'salad' },
      { name: 'desert' },
      { name: 'hot dish' },
      { name: 'beverage' },
      { name: 'pizza' }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('category');
  }
};
