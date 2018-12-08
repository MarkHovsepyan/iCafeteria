'use strict';
module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define('Food', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING
  }, {
      timestamps: false,
    });
  Food.associate = function (models) {
    // associations can be defined here
  };
  return Food;
};