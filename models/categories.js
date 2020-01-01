const Sequelize = require('sequelize')
const {db} = require('./index')

const Categories = db.define('categories', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  icon: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  order: {
    type: Sequelize.INTEGER
  }
})

module.exports = Categories