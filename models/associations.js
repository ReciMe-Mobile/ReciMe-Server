const Users = require('./users')
const Recipes = require('./recipes')
const Ingredients = require('./ingredients')
const Categories = require('./categories')

Users.hasMany(Categories)
Recipes.hasMany(Ingredients)
// Ingredients belongs to measurements 
// Directions table? 

module.exports = {
  Users,
  Recipes,
  Ingredients,
  Categories
}