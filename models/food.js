'use strict';
module.exports = (sequelize, DataTypes) => {
  const food = sequelize.define('food', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {});
  food.associate = function (models) {
    models.food.belongsTo(models.category);
    models.food.belongsToMany(models.ingredient, { through: models.foodIngredient });
  };
  return food;
};