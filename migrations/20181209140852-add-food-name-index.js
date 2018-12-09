'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addIndex('food', {
      fields: ['name'],
      name: 'food-name'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('food', 'food-name');
  }
};
