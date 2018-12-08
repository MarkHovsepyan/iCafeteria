'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('foodIngredient', {
      foodId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'food',
          key: 'id'
        }
      },
      ingredientId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ingredient',
          key: 'id'
        }
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
      .then(() => {
        queryInterface.addConstraint('foodIngredient', ['foodId', 'ingredientId'], {
          type: 'primary key',
          name: 'foodIngredient_pk'
        });
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('foodIngredient');
  }
};