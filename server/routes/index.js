var express = require('express');
var router = express.Router();

let db = [
  {
    id: 1,
    title: 'Маршрут по ущелью',
    url: '/img_1.JPG',
    description: 'Подарите себе незабываемое путешествие по тропам Кавказа. Этот маршрут - настоящая жемчужина среди горных пейзажей.',
  },
  {
    id: 2,
    title: 'Тропа вдоль горных ручьев',
    url: '/img_2.JPG',
    description: 'Подарите себе незабываемое путешествие по тропам Кавказа. Этот маршрут - настоящая жемчужина среди горных пейзажей.',
  },
  {
    id: 3,
    title: 'Пикник у горного озера',
    url: '/img_3.JPG',
    description: 'Подарите себе незабываемое путешествие по тропам Кавказа. Этот маршрут - настоящая жемчужина среди горных пейзажей.',
  },
  {
    id: 4,
    title: 'Дотянись до облаков',
    url: '/img_4.JPG',
    description: 'Подарите себе незабываемое путешествие по тропам Кавказа. Этот маршрут - настоящая жемчужина среди горных пейзажей.',
  },
];

router.get('/', function (_, res, next) {
  res.json(db) 
});

router.post('/one', (req,res) => {
  const result = db.find(el => el.id === +req.body.id) 
  res.status(200).json(result)
})

module.exports = router;
