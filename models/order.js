'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    date: DataTypes.DATE,
    customerId: DataTypes.INTEGER
  }, {});
  order.associate = function (models) {
    models.order.belongsTo(models.customer);
  };
  return order;
};