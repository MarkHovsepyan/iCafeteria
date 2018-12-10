'use strict';
const db = require('../models');

const viewName = 'veganView';
const createViewQuery = `CREATE VIEW ${viewName} AS( with ft as (select f.name foodName, f.id, i.name IngredientName, i.vegan from food f inner join foodingredient fi inner join ingredient i on f.id = fi.foodId and fi.ingredientId = i.id), nonveg as (select distinct ft1.foodName, ft1.id, ft1.vegan as isVegan from ft as ft1, ft as ft2 where ft1.foodName = ft2.foodName and ft1.vegan <> ft2.vegan or ft1.vegan = 0) select distinct ft.foodName, ft.id, if(ft.id = nonveg.id, false, true) as isVegan from ft left outer join nonveg on ft.id = nonveg.id)`;
const dropViewQuery = `DROP VIEW ${viewName}`;

module.exports = {
  up: function (queryInterface, Sequelize) {
    return db.sequelize.query(createViewQuery);
  },
  down: (queryInterface, Sequelize) => {
    return db.sequelize.query(dropViewQuery);
  }
};