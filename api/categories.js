const router = require('express').Router()
const {Categories} = require('../models/associations')
module.exports = router

router.get('/:userId', (req, res, next) => {
  try {
    Categories.findAll({
      where: {
        userId: req.params.userId
      }
    })
      .then(category => res.json(category))
  } catch (error) {
    next(error)
  }
})

router.post('/', (req, res, next) => {
  try {
    const newCategory = {
      name: req.body.name,
      icon: req.body.icon,
      order: req.body.order,
      userId: req.body.userId
    }
    Categories.create(newCategory)
      .then(category => res.json(category))
  } catch (error) {
    next(error)
  }
})