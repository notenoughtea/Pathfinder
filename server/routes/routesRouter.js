var express = require('express');
var router = express.Router();
const { Routes } = require('../db/models');

router.get('/routes', async (req, res, next) => {
  const routes = await Routes.findAll();
  res.json(routes); //res.send({routes});
});

router.post('/one', async (req,res) => {
  const { id } = req.body;
  const result = await Routes.findOne({where:{id: id}})
  res.status(200).json(result)
})

module.exports = router;
