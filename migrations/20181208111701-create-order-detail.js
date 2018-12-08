'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orderDetail', {
      foodId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'food',
          key: 'id'
        }
      },
      orderId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'order',
          key: 'id'
        }
      },
      quantity: {
        allowNull: false,
        defaultValue: 1,
        type: Sequelize.INTEGER,
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
        queryInterface.addConstraint('orderDetail', ['foodId', 'orderId'], {
          type: 'primary key',
          name: 'orderDetail_pk'
        });
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orderDetail');
  }
};