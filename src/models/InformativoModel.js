const Sequelize = require('sequelize');
const database = require('./database');

const InformativoModel = database.define('TblInformativo',
{
    idInformativo: 
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    titulo: 
    {
        type: Sequelize.STRING,
        allowNull: false,
    },

    conteudo:
    {
        type: Sequelize.STRING,
        allowNull: false
    },

    imagem:
    {
        type: Sequelize.STRING,
        allowNull: false
    },

    dataPublicacao: 
    {
        type: Sequelize.DATE,
        allowNull: false
    }
});

module.exports = InformativoModel;