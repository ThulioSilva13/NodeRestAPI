const TeamModel = require('../models/TeamModel');

async function getAllTeams (teamDTO: any)
{
    const listTeams = await TeamModel.findAll();
    return listTeams;

}

async function getTeamById(idTeam: number) 
{
    const team = await TeamModel.findByPk(idTeam);
    return team;

}

async function addTeam(teamDTO: any)
{
    const newTeam = await TeamModel.create
    ({
        idArena: teamDTO.idArena,
        nameTeam: teamDTO.nameTeam,
        logo: teamDTO.logo,
        championships: teamDTO.championships,
        conference: teamDTO.conference
    })
    return newTeam;
}

async function updateTeam(teamDTO: any)
{
    const oldTeam = await TeamModel.findByPk(teamDTO.idTeam);
    oldTeam.nameTeam = teamDTO.nameTeam;
    oldTeam.logo = teamDTO.logo;
    oldTeam.championships = teamDTO.championships;
    oldTeam.conference = teamDTO.conference
    return oldTeam;
}

async function deleteTeam(idTeam: number) 
{
    const deletedTeam = await TeamModel.findByPk(idTeam);

}

module.exports = 
{
    getAllTeams,
    getTeamById,
    addTeam,
    updateTeam,
    deleteTeam,
} 