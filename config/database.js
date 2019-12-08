const Sequelize = require('sequelize')

const sequelize = new Sequelize('blog-press', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = sequelize