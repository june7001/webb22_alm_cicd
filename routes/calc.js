const express = require('express');
const router = express.Router();

router.get('/add', (req, res) => {
  const { val } = req.query;
  const result = val.reduce((acc, curr) => acc + Number(curr), 0);
  res.send(result.toString());
});

module.exports = router;
