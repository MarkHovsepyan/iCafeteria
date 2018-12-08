'use strict';
module.exports = (sequelize, DataTypes) => {
  const orderDetail = sequelize.define('orderDetail', {
    foodId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    orderId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
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