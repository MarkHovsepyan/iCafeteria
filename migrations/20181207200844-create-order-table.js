'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Order', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            dateTime: Sequelize.DATE,
            customerId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Customer',
                    key: 'id'
                }
            },

        });

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Order');
    }
};

