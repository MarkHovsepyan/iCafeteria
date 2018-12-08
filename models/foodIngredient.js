'use strict';
module.exports = (sequelize, DataTypes) => {
  const foodIngredient = sequelize.define('foodIngredient', {
    foodId: DataTypes.INTEGER,
    ingredientId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
      freezeTableName: true
    });
  foodIngredient.associate = function (models) {
    // associations can be defined here
  };
  return foodIngredient;
};