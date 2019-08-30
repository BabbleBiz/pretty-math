const Sequelize = require('sequelize')
const pkg = require('../package.json')

const databaseName = pkg.name

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
  {
    logging: false
  }
)
async function dbrun () {
  await db.sync({force:true})
}
dbrun()
module.exports = db
