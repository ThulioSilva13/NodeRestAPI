const Sequelize = require('sequelize');
const database = require('./database');

const PLayer = database.define('TblPlayer',
{
    idPlayer: 
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    //FOREIGN KEY 
    idTeam: 
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        
    },

    namePlayer:
    {
        type: Sequelize.STRING,
        allowNull: false
    },

    number:
    {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    position:
    {
        type: Sequelize.STRING,
        allowNull: false
    },

    draft:
    {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    nationality:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
});