const {Users, Categories} = require('./models/associations')
const {db} = require('./models/index')

const seedUsers = [
  { firstName: 'Andi', lastName: 'Plummer', skinTypeId: 1, email: 'andi@gmail.com', password: '1234'},
]

const seedCategories = [
  { name: 'Vegan', icon: 'carrot' },
  { name: 'Bowls', icon: 'bowl' },
  { name: 'Cookies', icon: 'cookie' },
  { name: 'Asian', icon: 'rice' },
  { name: 'Veggies', icon: 'corn' },
  { name: 'Pastries', icon: 'food-croissant' },
  { name: 'Fish', icon: 'fish' },
  { name: 'American', icon: 'food' },
  { name: 'Burgers', icon: 'hamburger' },
  { name: 'Dessert', icon: 'cupcake' },
  { name: 'Drinks', icon: 'beer' },
  { name: 'General', icon: 'silverware-variant' },
]

async function seed() {
  try {
      await db.sync({force: true})
      await Users.bulkCreate(seedUsers)
      await Categories.bulkCreate(seedCategories)
     //  await ProductReviews.bulkCreate(seedReviews)
      await db.close()
      console.log('database reset!')
  } catch (error) {
      console.log(error)
  }
}

seed()