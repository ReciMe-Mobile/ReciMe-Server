const Sequelize = require('sequelize')
const {db} = require('./index')

const Recipes = db.define('recipes', {
  name: {
    type: Sequelize.STRING
  },

})

module.exports = Recipes