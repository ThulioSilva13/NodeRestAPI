const Sequelize = require('sequelize');
const database = require('./database');

const Arena = database.define('TblArena',
{
    idArena: 
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    nameArena:
    {
        type: Sequelize.STRING,
        allowNull: false
    },

    location:
    {
        type: Sequelize.STRING,
        allowNull: false
    },

    capacity: 
    {
        type: Sequelize.DOUBLE,
        allowNull: false
    },

    openingDate:
    {
        type: Sequelize.DATE,
        allowNull: false
    },

    closingDate:
    {
        type: Sequelize.DATE,
        allowNull: true
    },
});