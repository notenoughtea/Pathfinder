var express = require('express');
var router = express.Router();
const { Routes, Reference } = require('../db/models');

router
.route('/routes')
.get(async (req, res, next) => {
  const routes = await Routes.findAll();
  res.json(routes);
})
.post(async (req, res) => {
  console.log(req.body);
  const {
    userId,
  } = req.body
  try {
    if(req.body) {
      const newRoute = await Routes.create(req.body);
      const id = newRoute.dataValues.id;
      const newReference = await Reference.create({user_id:userId, routes_id: id, creator: true });
      res.status(200).json(newRoute)
    }
  } catch (err) {
    res.status(500);
  }
})
.patch(async (req, res) => {
  const {
    id,
    title,
    difficulty,
    address,
    length,
    description,
    lat,
    lng,
  } = req.body
      try {
        if(req.body) {
          const updatedRoute = await Routes.findOne({where: {
            id
          }});
          updatedRoute.update({
            title,
            difficulty,
            address,
            length,
            description,
            lat,
            lng,
          })
          res.status(200).json(updatedRoute)
        }
      } catch (err) {
        res.status(500);
      }
    })
    .delete(async (req, res) => {
      try {
        if(req.body.id) {
          const routeToDelete = await Routes.findOne({where: {
            id: req.body.id 
          }});
          routeToDelete.destroy()
          res.sendStatus(200)
          }
      } catch (err) {
        res.status(500);
      }
    })

    // Карточки созданные пользователем
    router.route('/routes/mycards')
    .put(async (req, res, next) => {
    try {
    const references = await Reference.findAll({
        where: {
          user_id: req.body.userId,
          creator: true
        }
      });
    const idArr = references.map((e)=>e.routes_id)
    const myCards = await Routes.findAll({
      where: {
        id: idArr
      }
    });
    res.status(200).json(myCards);

      } catch (err) {
      res.status(500);
      }
    })





router.post('/one', async (req,res) => {
  const { id } = req.body;
  const result = await Routes.findOne({where:{id: id}})
  res.status(200).json(result)
})
router.post('/background', (req,res) => {
  res.status(200).send({url: '/img/IMG_0507.png'})
})
module.exports = router;
