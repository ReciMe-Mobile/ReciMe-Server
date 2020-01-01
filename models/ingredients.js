const Sequelize = require('sequelize')
const {db} = require('./index')

const Ingredients = db.define('ingredients', {
  name: {
    type: Sequelize.STRING
  }
})

module.exports = Ingredients