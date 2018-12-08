'use strict';
const db = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return db.ingredient.bulkCreate([
      { name: 'onion', vegan: true, quantity: 11 },
      { name: 'basil', vegan: true, quantity: 200 },
      { name: 'garlic', vegan: true, quantity: 0 },
      { name: 'tomato', vegan: true, quantity: 150 },
      { name: 'potato', vegan: true, quantity: 7 },
      { name: 'pork', vegan: false, quantity: 17 },
      { name: 'cheddar', vegan: false, quantity: 42 },
      { name: 'milk', vegan: false, quantity: 32 },
      { name: 'chicken', vegan: false, quantity: 6 }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ingredient');
  }
};
