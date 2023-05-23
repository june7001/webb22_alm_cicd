const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.json({ members: ['ZZ', 'AG', 'FG', 'JB'] });
});

module.exports = router;
