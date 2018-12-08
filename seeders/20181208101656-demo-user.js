'use strict';

const faker = require('faker');
const db = require('../models');


module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('food', [{
        name: faker.findName(),
        price: faker.internet.email(),
        description: faker.internet.url(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('food', null, {});
  }
};
