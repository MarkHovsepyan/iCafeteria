'use strict';
module.exports = (sequelize, DataTypes) => {
  const food = sequelize.define('food', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
  }, {
    freezeTableName: true
  });
  food.associate = function (models) {
    models.food.belongsTo(models.category, { foreignKey: 'categoryId', targetKey: 'id', as: 'category' });
    models.food.belongsToMany(models.ingredient, { through: models.foodIngredient, as: 'ingredients' });
  };
  return food;
};