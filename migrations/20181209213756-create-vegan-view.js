'use strict';

const query = 'CREATE VIEW veganView AS( with ft as (select f.name foodName, f.id, i.name IngredientName, i.vegan from food f inner join foodingredient fi inner join ingredient i on f.id = fi.foodId and fi.ingredientId = i.id), nonveg as (select distinct ft1.foodName, ft1.id, ft1.vegan as isVegan from ft as ft1, ft as ft2 where ft1.foodName = ft2.foodName and ft1.vegan <> ft2.vegan or ft1.vegan = 0) select distinct ft.foodName, ft.id, if(ft.id = nonveg.id, false, true) as isVegan from ft left outer join nonveg on ft.id = nonveg.id)';
const view_name = 'veganView';

module.exports = {
  up: function (database, Sequelize) {
    return Sequelize.query(query);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('veganViews');
  }
};