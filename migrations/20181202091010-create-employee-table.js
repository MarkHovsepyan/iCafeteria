'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Employee', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: Sequelize.STRING,
      lastName: Sequelize.STRING,
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Employee');
  }
};



