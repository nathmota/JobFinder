const Sequelize = require('sequelize');

//apontamento do banco
const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: './db/app.db'
})


//exportar coisas de fora do app.js
module.exports = sequelize
