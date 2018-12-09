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
      { name: 'brocolli', vegan: true, quantity: 10 },
      { name: 'rice', vegan: true, quantity: 14 },
      { name: 'lemon', vegan: true, quantity: 8 }, 
      { name: 'pork', vegan: false, quantity: 17 },
      { name: 'cheddar', vegan: false, quantity: 42 },
      { name: 'milk', vegan: false, quantity: 32 },
      { name: 'chicken', vegan: false, quantity: 6 },
      { name: 'egg', vegan: false, quantity: 20 },
      { name: 'brocolli', vegan: true, quantity: 10 },
      { name: 'chanakh', vegan: false, quantity: 50 },
      { name: 'bacon', vegan: false, quantity: 49 },
      { name: 'honey', vegan: false, quantity: 5 },
      { name: 'beef', vegan: false, quantity: 15 }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ingredient');
  }
};
