'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('review', {
      comment: {
        allowNull: false,
        type: Sequelize.STRING
      },
      star: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      date: {
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
        type: Sequelize.DATE
      },
      customerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'customer',
          key: 'id'
        }
      },
      foodId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'food',
          key: 'id'
        }
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
        queryInterface.addConstraint('review', ['foodId', 'customerId'], {
          type: 'primary key',
          name: 'review_pk'
        });
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('review');
  }
};