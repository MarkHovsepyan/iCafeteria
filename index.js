const express = require('express');
const bodyParser = require('body-parser');
require('dotenv');

const PORT = process.env.SERVER_PORT || 8080;

const food = require('./routes/food');
const category = require('./routes/category');
const order = require('./routes/order');
const ingredient = require('./routes/ingredient');

const app = express();

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json({ type: 'application/json' }))
  .use('/food', food)
  .use('/category', category)
  .use('/order', order)
  .use('/ingredient', ingredient)
  .listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
