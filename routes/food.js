const express = require('express');
const db = require('../models');

const router = express.Router();

router
	.get('/', async (req, res) => {
		const foods = await db.food.findAll();
		res.json({ foods });
	})
	.get('/:id', async (req, res) => {
		const food = await db.food.findByPk(req.params.id);
		res.json({ food });
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
			res.json({ message: "error" });
		}
	});

module.exports = router;
