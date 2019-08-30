const Sequelize = require('sequelize')
const db = require('../db')

const Data = db.define('data', {
  expression: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.STRING
  },
  result: {
    type: Sequelize.STRING
  }
})

module.exports = Data
