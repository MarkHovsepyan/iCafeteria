'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Ingredient', {
          id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true,
          },
          name: Sequelize.STRING,
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Ingredient');
  }
};
