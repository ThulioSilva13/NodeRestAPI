const Sequelize =  require('sequelize');
const sequelize = new Sequelize('NBAinfo', 'root', 'galo2013', 
{
    dialect: 'mysql',
    host: 'localhost'
})

sequelize.authenticate()
.then(() => 
{
    console.log("conectado com sucesso");
}).catch(() => 
{
    console.log("erro ao conectar")
})

module.exports = sequelize;