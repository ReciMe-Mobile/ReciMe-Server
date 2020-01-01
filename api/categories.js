const router = require('express').Router()
const {Categories} = require('../models/associations')
module.exports = router

router.get('/', (req, res, next) => {
  try {
    Categories.findAll()
      .then(category => res.json(category))
  } catch (error) {
    next(error)
  }
})