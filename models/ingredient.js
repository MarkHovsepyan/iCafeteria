'use strict';
module.exports = (sequelize, DataTypes) => {
  const ingredient = sequelize.define('ingredient', {
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    vegan: DataTypes.BOOLEAN
  }, {
      freezeTableName: true
    });
  ingredient.associate = function (models) {
    models.ingredient.belongsToMany(models.food, { through: models.foodIngredient });
  };
  return ingredient;
};