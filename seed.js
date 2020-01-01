const {Users, Categories} = require('./models/associations')
const {db} = require('./models/index')

const seedUsers = [
  { firstName: 'Andi', lastName: 'Plummer', email: 'andi@gmail.com', password: '1234'},
  { firstName: 'Michael', lastName: 'Powers', email: 'michael@gmail.com', password: '1234'},
]

const seedCategories = [
  { name: 'Vegan', icon: 'carrot', order: 1, userId: 1 },
  { name: 'Bowls', icon: 'bowl', order: 2, userId: 1 },
  { name: 'Fish', icon: 'fish', order: 5, userId: 1 },
  { name: 'Burgers', icon: 'hamburger', order: 4, userId: 1 },
  { name: 'Dessert', icon: 'cupcake', order: 3, userId: 1 },
  { name: 'Drinks', icon: 'beer', order: 6, userId: 1 },
  { name: 'General', icon: 'silverware-variant', order: 7, userId: 1 },
  { name: 'Dessert', icon: 'cupcake', order: 1, userId: 2 },
  { name: 'Drinks', icon: 'beer', order: 2, userId: 2 },
  { name: 'General', icon: 'silverware-variant', order: 3, userId: 2 },
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