const express = require('express');
const router = express.Router();

router.get('/add', (req, res) => {
  const { val } = req.query;

  if (!Array.isArray(val)) {
    return res.status(400).send('Invalid input');
  }

  const result = val.reduce((acc, curr) => acc + Number(curr), 0);
  res.type('text/plain; charset=utf-8').send(result.toString());
});

module.exports = router;
