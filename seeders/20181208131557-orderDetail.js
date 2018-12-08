'use strict';
const { uniqBy } = require('lodash');
const db = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const [orders, foods] = await Promise.all([
      db.order.findAll(),
      db.food.findAll()
    ]);
    const getRandomFoodId = () => foods[Math.floor(Math.random() * foods.length)].id;

    let orderDetails = [];

    for (let i = 1; i <= 100; i++) {
      const foodNumber = Math.ceil(Math.random() * 3);
      const foods = [];
      for (let j = 1; j <= foodNumber; j++) {
        foods.push({
          foodId: getRandomFoodId(),
          orderId: orders[i - 1].id,
          quantity: Math.ceil(Math.random() * 5)
        });
      }
      orderDetails.push(...uniqBy(foods, f => [f.orderId, f.foodId].join()));
    }
    return db.orderDetail.bulkCreate(orderDetails);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orderDetail');
  }
};