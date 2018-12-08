'use strict';
module.exports = (sequelize, DataTypes) => {
  const orderDetail = sequelize.define('orderDetail', {
    foodId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
      freezeTableName: true
    });
  orderDetail.associate = function (models) {
    models.orderDetail.belongsTo(models.order);
    models.orderDetail.belongsTo(models.food);
  };
  return orderDetail;
};