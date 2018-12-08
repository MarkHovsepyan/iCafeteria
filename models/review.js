'use strict';
module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define('review', {
    comment: DataTypes.STRING,
    star: DataTypes.INTEGER,
    customerId: DataTypes.INTEGER,
    foodId: DataTypes.INTEGER
  }, {});
  review.associate = function (models) {
    models.review.belongsTo(models.customer);
    models.review.belongsTo(models.food);
  };
  return review;
};