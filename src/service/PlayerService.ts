const PlayerModel = require('../models/PlayerModel');

async function getAllPlayers (playerDTO: any)
{
    const listPlayers = await PlayerModel.findAll();
    return listPlayers;

}

async function getPlayerById(idPlayer: number) 
{
    const player = await PlayerModel.findByPk(idPlayer);
    return player;

}

async function addPLayer(playerDTO: any)
{
    const newPlayer = await PlayerModel.create
    ({
        idTeam: playerDTO.idTeam,
        namePlayer: playerDTO.namePlayer,
        number: playerDTO.location,
        position: playerDTO.position,
        draft: playerDTO.draft,
        nationality: playerDTO.nationality
    })
    return newPlayer;
}

async function updatePlayer(playerDTO: any)
{
    const oldPlayer = await PlayerModel.findByPk(playerDTO.idPlayer);
    oldPlayer.namePlayer = playerDTO.namePlayer;
    oldPlayer.number = playerDTO.number;
    oldPlayer.position = playerDTO.position;
    oldPlayer.nationality = playerDTO.nationality
    return oldPlayer;
}

async function deletePlayer(idPlayer: number) 
{
    const deletedPlayer = await PlayerModel.findByPk(idPlayer);

}

module.exports = 
{
    getAllPlayers,
    getPlayerById,
    addPLayer,
    updatePlayer,
    deletePlayer,
} 