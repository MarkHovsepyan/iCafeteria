const express = require('express');
const db = require('../models');

const router = express.Router();

router
	.get('/', async (req, res) => {
		console.log('getting food')
		const foods = await db.Food.findAll();
		res.json({ foods });
	})
	.post('/', async (req, res) => {
		const { name } = req.body;
		const food = await db.Food.create({ name });
		res.json({ food });
	})
	.delete('/:id', async (req, res) => {
		const { id } = req.params;
		try {
			await db.Food.destroy({ where: { id } });
			res.json({ id });
		} catch (e) {
			res.json({ message: "error" });
		}
	});

module.exports = router;
