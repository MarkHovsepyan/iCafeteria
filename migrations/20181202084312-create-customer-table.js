'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Customer', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: Sequelize.STRING,
      last_name: Sequelize.STRING,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Customer');
  }
};

