const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const { User } = require('../db/models')

router.post('/signup', async function(req, res, next) {

  const {firstName, lastName, email, password} = req.body

  if (firstName, lastName, email, password) {
    try {
      const findUser = await User.findOne({where: {email}})
      if(findUser) {
        console.log('err');
        return res.send({error: 'Пользователь с таким email уже зарегестрирован'})
      } else {
        const hash = await bcrypt.hash(password, 8)
        const user = await User.create({firstName, lastName, email, password: hash})
       return res.json({id: user.id, firstName, lastName, email})
      }
    } catch (error) {
      console.log(error);
    }   
  }
});

router.post('/signin', async function(req, res, next) {

  const {email, password} = req.body

  if (email, password) {
    try {
      const findUser = await User.findOne({where: {email}})
      if(!findUser) {
        console.log('err');
        return res.send({error: 'Пользователь с таким email еще не зарегестрирован'})
      } else if (findUser) {
        if(await bcrypt.compare(password, findUser.password)) {
          const {id, firstName, lastName, email} = findUser
          return res.json({id, firstName, lastName, email})
        } else res.json({error: "Неверный пароль"})
      }
    } catch (error) {
      console.log(error);
    }   
  }
});

module.exports = router;
