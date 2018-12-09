const express = require('express');
const db = require('../models');

const router = express.Router();

router
  .get('/', async (req, res) => {
    const ingredients = await db.ingredient.findAll();
    res.json({ ingredients });
  })
  .get('/:id', async (req, res) => {
    const ingredient = await db.ingredient.findByPk(req.params.id);
    res.json({ ingredient });
  })
  .post('/', async (req, res) => {
    const { name } = req.body;
    const ingredient = await db.ingredient.create({ name });
    res.json({ ingredient });
  })
  .delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await db.ingredient.destroy({ where: { id } });
      res.json({ id });
    } catch (e) {
      res.json({ message: 'error' });
    }
  });

module.exports = router;
