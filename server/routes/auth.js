const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const { User } = require('../db/models')

router.post('/', async function(req, res, next) {

  const {firstName, lastName, email, password} = req.body

  if (firstName, lastName, email, password) {
    try {
      const findUser = await User.findOne({where: {email}})
      if(findUser) {
        return res.send({error: 'Пользователь с таким email уже зарегестрирован'})
      } else {
        const hash = await bcrypt.hash(password, 8)
        await User.create({firstName, lastName, email, password: hash})
      }
    } catch (error) {
      console.log(error);
    }
    
    
  }
});

module.exports = router;
