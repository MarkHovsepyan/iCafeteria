const express = require('express');
const db = require('../models');

const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const foods = await db.food.findAll();
      res.json({ foods });
    } catch (e) {
      res.json({ error: true });
    }
  })
  .get('/byCategory/:categoryId*?', async (req, res) => {
    try {
      const { categoryId } = req.params;
      const where = categoryId == null ? {} : { categoryId };
      const foodsRaw = await db.food.findAll({
        where,
        include: [{ model: db.category, as: 'category' }, { model: db.ingredient, as: 'ingredients' }],
      });
      const foods = foodsRaw
        .map(food => food.get({ plain: true }))
        .map(food => {
          const { ingredients } = food;
          const hasEnoughIngredients = ingredients.every(i => i.quantity >= i.foodIngredient.quantity);
          const isVegan = ingredients.every(i => i.vegan);
          return { ...food, hasEnoughIngredients, isVegan };
        });
      res.json({ foods });
    } catch (e) {
      res.json({ error: true });
    }
  })
  .get('/:id', async (req, res) => {
    try {
      const food = await db.food.findByPk(req.params.id);
      res.json({ food });
    } catch (e) {
      res.json({ error: true });
    }
  })
  .post('/', async (req, res) => {
    const { name } = req.body;
    const food = await db.food.create({ name });
    res.json({ food });
  })
  .delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await db.food.destroy({ where: { id } });
      res.json({ id });
    } catch (e) {
      res.json({ error: true });
    }
  });

module.exports = router;
