const express = require('express');
const db = require('../models');

const router = express.Router();

router
  .get('/', async (req, res) => {
    const orders = await db.order.findAll();
    res.json({ orders });
  })
  .get('/:id', async (req, res) => {
    const order = await db.order.findByPk(req.params.id);
    res.json({ order });
  })
  .post('/', async (req, res) => {
    const { customerId } = req.body;
    const order = await db.order.create({ customerId });
    res.json({ order });
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