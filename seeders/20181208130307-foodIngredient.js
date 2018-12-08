'use strict';
const { uniqBy } = require('lodash');
const db = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const [foods, ingredients] = await Promise.all([
      db.food.findAll(),
      db.ingredient.findAll()
    ]);
    const getRandomFoodId = () => foods[Math.floor(Math.random() * foods.length)].id;
    const getRandomIngredientId = () => ingredients[Math.floor(Math.random() * ingredients.length)].id;
    const foodIngredients = new Array(10)
      .fill(null)
      .map(() => {
        return {
          foodId: getRandomFoodId(),
          ingredientId: getRandomIngredientId(),
          quantity: Math.ceil(Math.random() * 10)
        }
      });
    const uniqueFoodIngredients = uniqBy(foodIngredients, fi => [fi.foodId, fi.ingredientId].join());
    return db.foodIngredient.bulkCreate(uniqueFoodIngredients);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('foodIngredient');
  }
};
