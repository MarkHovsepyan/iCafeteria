'use strict';
module.exports = (sequelize, DataTypes) => {
  const foodIngredient = sequelize.define('foodIngredient', {
    foodId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    ingredientId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    quantity: DataTypes.INTEGER
  }, {
      freezeTableName: true
    });
  foodIngredient.associate = function (models) {
    models.foodIngredient.belongsTo(models.food, { foreignKey: 'foodId', targetKey: 'id', as: 'food' });
    models.foodIngredient.belongsTo(models.food, { foreignKey: 'ingredientId', targetKey: 'id', as: 'ingredient' });
  };
  return foodIngredient;
};