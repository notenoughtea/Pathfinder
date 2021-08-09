var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/routes', async (req, res, next) => {
  const routes = await Routes.findAll();
  console.log(routes);
  res.send({routes});
});

module.exports = router;
