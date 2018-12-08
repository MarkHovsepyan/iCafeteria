'use strict';
module.exports = (sequelize, DataTypes) => {
  const food = sequelize.define('food', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
      freezeTableName: true
    });
  food.associate = function (models) {
    models.food.belongsTo(models.category);
    models.food.belongsToMany(models.ingredient, { through: models.foodIngredient });
  };
  return food;
};