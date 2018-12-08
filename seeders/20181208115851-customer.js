'use strict';
const faker = require('faker');
const db = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const customers = new Array(50)
      .fill(null)
      .map(() => {
        const customer = {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          phoneNumber: faker.phone.phoneNumber(),
          email: faker.internet.email(),
          username: faker.internet.userName(),
          password: faker.internet.password()
        }
        return customer;
      });
    return db.customer.bulkCreate(customers);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('customer');
  }
};
