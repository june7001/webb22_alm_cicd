var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ members: ["ZZ", "AG", "FG", "JB"] });
});

module.exports = router;
