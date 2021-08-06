var express = require('express');
var router = express.Router();

let db = [
  {
    id: 1,
    title: 'Маршрут по ущелью',
    url: 'img_1.JPG',
  },
  {
    id: 2,
    title: 'Тропа вдоль горных ручьев',
    url: 'img_2.JPG',
  },
  {
    id: 3,
    title: 'Горное озеро',
    url: 'img_3.JPG',
  },
  {
    id: 4,
    title: 'Дотянись до облаков',
    url: 'img_4.JPG',
  },
];

router.get('/', function (_, res, next) {
  res.json(db) 
});

module.exports = router;
