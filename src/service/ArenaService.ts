const ArenaModel = require('../models/ArenaModel');
const Arena = require('../interface/ArenaInterface');

async function getAllArenas()
{
    const listArenas = await ArenaModel.findAll();
    return listArenas;

}

async function getArenaById(idArena: number) 
{
    const arena = await ArenaModel.findByPk(idArena);
    return arena;

}

async function addArena(arenaDTO: typeof Arena)
{
    const newArena = await ArenaModel.create
    ({
        nameArena: arenaDTO.nameArena,
        location: arenaDTO.location,
        capacity: arenaDTO.capacity,
        openingDate: arenaDTO.openingDate
    })
    return newArena;
}

async function updateArena(arenaDTO: typeof Arena)
{
    const oldArena = await ArenaModel.findByPk(arenaDTO.idArena);
    oldArena.nameArena = arenaDTO.nameArena;
    oldArena.location = arenaDTO.location;
    oldArena.capacity = arenaDTO.capacity;
    oldArena.updatedAt = new Date();
    return oldArena;
}

async function deleteArena(idArena: number) 
{
    const deletedArena = await ArenaModel.findByPk(idArena);
    deletedArena.destroy();

}

module.exports = 
{
    getAllArenas,
    getArenaById,
    addArena,
    updateArena,
    deleteArena,
} 