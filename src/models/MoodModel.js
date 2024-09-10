const Sequelize = require('sequelize');
const database = require('./database');

const MoodModel = database.define('TblMood',
{
    idMood: 
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    //FOREIGN KEY 
    data: 
    {
        type: Sequelize.DATE,
        allowNull: false,
        
    },

    idDOMHumor:
    {
        type: Sequelize.INT,
        allowNull: false
    },

    observacao:
    {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = MoodModel;