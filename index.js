require('dotenv');
const express = require('express');
const db = require('./models');
const PORT = process.env.SERVER_PORT || 8080;
const app = express();

app
	.get('/', (req, res) => {
		res.json({ message: 'hello world' });
	})
	.listen(PORT, () => {
		console.log(`Listening on port ${PORT}`);
	});
