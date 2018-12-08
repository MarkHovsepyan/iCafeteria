'use strict';
const db = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const customers = await db.customer.findAll();
    const getRandomCustomerId = () => customers[Math.floor(Math.random() * customers.length)].id;
    const orders = new Array(100)
      .fill(null)
      .map(() => {
        return {
          customerId: getRandomCustomerId()
        };
      });
    return db.order.bulkCreate(orders);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('order');
  }
};
