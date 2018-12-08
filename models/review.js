'use strict';
module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define('review', {
    customerId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    foodId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    comment: DataTypes.STRING,
    star: DataTypes.INTEGER,
  }, {
      freezeTableName: true
    });
  review.associate = function (models) {
    models.review.belongsTo(models.customer, { foreignKey: 'customerId', targetKey: 'id', as: 'customer' });
    models.review.belongsTo(models.food), { foreignKey: 'foodId', targetKey: 'id', as: 'food' };
  };
  return review;
};