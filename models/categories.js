const Sequelize = require('sequelize')
const {db} = require('./index')

const Categories = db.define('categories', {
  name: {
    type: Sequelize.STRING
  },
  icon: {
    type: Sequelize.STRING
  }
})

module.exports = Categories