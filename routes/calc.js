const express = require('express');
const Calculator = require('./calculator');
const router = express.Router();

router.get('/add', (req, res) => {
  const { val } = req.query;
  if (!Array.isArray(val)) {
    return res.status(400).send('Invalid input');
  }
  const result = Calculator.add(...val.map(Number));
  res.type('text/plain; charset=utf-8').send(result.toString());
});

module.exports = router;
