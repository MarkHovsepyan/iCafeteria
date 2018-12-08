'use strict';
module.exports = (sequelize, DataTypes) => {
  const ingredient = sequelize.define('ingredient', {
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    vegan: DataTypes.BOOLEAN
  }, {});
  ingredient.associate = function (models) {
    models.ingredient.belongsToMany(models.food, { through: models.foodIngredients });
  };
  return ingredient;
};