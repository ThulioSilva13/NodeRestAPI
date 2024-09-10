const Sequelize = require('sequelize');
const database = require('./database');

const UserModel = database.define('TblUser',
{
    idUser: 
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    nameUser:
    {
        type: Sequelize.STRING,
        allowNull: false
    },

    email:
    {
        type: Sequelize.STRING,
        allowNull: false
    },

    senha: 
    {
        type: Sequelize.STRING,
        allowNull: false
    },

    idMood: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    dataNascimento:
    {
        type: Sequelize.DATE,
        allowNull: false
    },
    nivelAnsiedade:
    {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

module.exports = UserModel;