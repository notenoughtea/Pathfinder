var express = require('express');
var router = express.Router();
const {Routes} = require("../db/models")
// const User = require("../db/models/index")
// console.log(User);

/* GET home page. */
router.get('/routes', async (req, res, next) => {
  const routes = await Routes.findAll();
  res.json(routes);
});

module.exports = router;
