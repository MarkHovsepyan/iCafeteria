'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    customerId: DataTypes.INTEGER
  }, {
      freezeTableName: true
    });
  order.associate = function (models) {
    models.order.belongsTo(models.customer);
  };
  return order;
};