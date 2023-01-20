const Sequelize = require('sequelize');
const database = require('./database');

const TeamModel = database.define('TblTeam',
{
    idTeam: 
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    idArena: 
    {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

    nameTeam:
    {
        type: Sequelize.STRING,
        allowNull: false
    },

    logo:
    {
        type: Sequelize.STRING,
        allowNull: false
    },

    championships: 
    {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    conference:
    {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = TeamModel;