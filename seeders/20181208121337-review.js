'use strict';
const faker = require('faker');
const { uniqBy } = require('lodash');
const db = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const foods = await db.food.findAll();
    const customers = await db.customer.findAll();
    const getRandomFoodId = () => foods[Math.floor(Math.random() * foods.length)].id;
    const getRandomCustomerId = () => customers[Math.floor(Math.random() * customers.length)].id;
    const reviews = new Array(20)
      .fill(null)
      .map(() => {
        return {
          customerId: getRandomCustomerId(),
          foodId: getRandomFoodId(),
          comment: faker.lorem.sentence(),
          star: Math.ceil(Math.random() * 5)
        }
      });
    const uniqueReviews = uniqBy(reviews, review => [review.customerId, review.foodId].join());
    return db.review.bulkCreate(uniqueReviews);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('review');
  }
};
