var express = require('express');
var router = express.Router();
<<<<<<< HEAD
const {Routes} = require("../db/models")
// const User = require("../db/models/index")
// console.log(User);
=======
const { Routes } = require('../db/models');
>>>>>>> 76ab0bc90afd9fbef7bf8453e501a658e09c0ac4

router.get('/routes', async (req, res, next) => {
  const routes = await Routes.findAll();
<<<<<<< HEAD
  res.json(routes);
=======
  res.json(routes); //res.send({routes});
>>>>>>> 76ab0bc90afd9fbef7bf8453e501a658e09c0ac4
});

router.post('/one', async (req,res) => {
  const { id } = req.body;
  const result = await Routes.findOne({where:{id: id}})
  res.status(200).json(result)
})
router.post('/background', (req,res) => {
  res.status(200).send({url: '/img/IMG_0507.png'})
})

module.exports = router;
