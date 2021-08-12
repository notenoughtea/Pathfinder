const express = require('express');
const router = express.Router();
const { Routes } = require('../db/models');
const multer = require('multer')
const { Photos } = require('../db/models')
const { v4: uuidv4 } = require('uuid');

const DIR = './public/img';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

router
.route('/image')
.post(upload.single('333'), async (req, res) => {
  // console.log( req.file);
  // console.log( req.body.user_id);
  const url = req.protocol + '://' + req.get('host')
  // console.log(url);
  const {user_id, routes_id } = req.body
  try {
    if(user_id && routes_id && req.file) {
      const newPhoto = await Photos.create({
        user_id,
        routes_id,
        original: url + '/img/' + req.file.filename,
        thumbnail: url + '/img/' + req.file.filename
      })
      res.json({photo: newPhoto})
    }
  } catch (error) {
    console.log(error);
  }
  }
)

router
.route('/image/:id')
.get(async (req, res, next) => {
  console.log(req.session);
  const id = req.params.id
  if(id) {
    try {
      const photos = await Photos.findAll(
        {
        attributes: ['original','thumbnail'],
        where: { routes_id: id },
        raw: true,
      }
      );
      // console.log(photos);
      res.json(photos)
    } catch (error) {
      console.log(error);
    }
    
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
