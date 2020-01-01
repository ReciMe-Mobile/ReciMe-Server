const Sequelize = require('sequelize')
const {db} = require('./index')
const crypto = require('crypto')

const Users = db.define('users', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true,
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
    get() {
      return () => this.getDataValue('password')
    }
  },
  salt: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue('salt')
    }
  },
  skinTypeId: {
    type: Sequelize.INTEGER
  }
})

// instance methods
Users.prototype.correctPassword = function(candidatePwd) {
  return Users.encryptPassword(candidatePwd, this.salt()) === this.password()
}

// class methods
Users.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64')
}

Users.encryptPassword = function(plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

// hooks
const setSaltAndPassword = user => {
  if (user.changed('password')) {
    user.salt = Users.generateSalt()
    user.password = Users.encryptPassword(user.password(), user.salt())
  }
}

Users.beforeCreate(setSaltAndPassword)
Users.beforeUpdate(setSaltAndPassword)
Users.beforeBulkCreate(users => {
  users.forEach(setSaltAndPassword)
})


module.exports = Users