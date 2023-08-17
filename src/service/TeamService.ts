const TeamModel = require('../models/TeamModel');
const Team = require('../interface/TeamInterface');

async function getAllTeams()
{
    const listTeams = await TeamModel.findAll();
    return listTeams;

}

async function getAllTeamsByTitles()
{
    const listTeams = await TeamModel.findAll({
        order: [['championships', 'desc']]
    });
    return listTeams;

}


async function getTeamById(idTeam: number)
{
    const team = await TeamModel.findByPk(idTeam);
    if(team == null)
    {
        return "Não foi possível encontrar o time";
    }
    return team;

}

async function getTeamsByConference(conference: string)
{
    try
    {
        const teamByConferece = await TeamModel.findAll
        ({
            where: {
                conference: conference,
            },
        });
        return teamByConferece;
    }
    catch(error)
    {
        return("Não foi possível encontrar");
    }
}

async function addTeam(teamDTO: typeof Team)
{
    const newTeam = await TeamModel.create
    ({
        idArena: teamDTO.idArena,
        nameTeam: teamDTO.nameTeam,
        logo: teamDTO.logo,
        championships: teamDTO.championships,
        conference: teamDTO.conference,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    return newTeam;
}

async function updateTeam(teamDTO: typeof Team)
{
    const oldTeam = await TeamModel.update(teamDTO,
        {
            where:
            {
                idTeam: teamDTO.idTeam
            }
        })
    return oldTeam;
}

async function deleteTeam(idTeam: number) 
{
    const deletedTeam = await TeamModel.findByPk(idTeam);
    deletedTeam.destroy();
}

module.exports = 
{
    getAllTeams,
    getAllTeamsByTitles,
    getTeamById,
    getTeamsByConference,
    addTeam,
    updateTeam,
    deleteTeam,
} 