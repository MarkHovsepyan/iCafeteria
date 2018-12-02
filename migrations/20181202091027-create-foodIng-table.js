'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('FoodIngredient', {

        foodId: {
              type: Sequelize.INTEGER,
              references: {
                model: 'Food',
                  key: 'id'
              }
          },

        ingredientId: {
          type: Sequelize.INTEGER,
            references: {
              model: 'Ingredient',
                key: 'id'
            }
        },

      })
          .then(() => {
              queryInterface.addConstraint('FoodIngredient', ['foodId', 'ingredientId'], {
                  type: 'primary key',
                  name: 'foodIngredient_pk'
              });
          });;

  },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('FoodIngredient');
    }
};
