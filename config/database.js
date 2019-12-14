const Sequelize = require('sequelize')

const sequelize = new Sequelize('blog-press', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  timezone: '-03:00'
})

module.exports = sequelize