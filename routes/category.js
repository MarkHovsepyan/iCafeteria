const express = require('express');
const db = require('../models');

const router = express.Router();

router
  .get('/', async (req, res) => {
    const categories = await db.category.findAll();
    res.json({ categories });
  })
  .get('/:id', async (req, res) => {
    const category = await db.category.findByPk(req.params.id);
    res.json({ category });
  })
  .post('/', async (req, res) => {
    const { name } = req.body;
    const category = await db.category.create({ name });
    res.json({ category });
  })
  .delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await db.category.destroy({ where: { id } });
      res.json({ id });
    } catch (e) {
      res.json({ message: 'error' });
    }
  });

module.exports = router;