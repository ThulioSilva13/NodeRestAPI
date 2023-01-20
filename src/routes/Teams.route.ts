import { Router, Request, Response, NextFunction } from "express";
import {StatusCodes} from 'http-status-codes';
import { TEXT } from "sequelize";

const connection = require('../models/database');
const Team = require('../models/TeamModel');
const teamsRoute = Router();

teamsRoute.get('/teams', async (req: Request, res: Response, next: NextFunction) => 
{
    const listTeams = await Team.findAll();
    res.status(200).send(listTeams);

})

teamsRoute.get('/teams/get/:uuid', async (req: Request<{uuid: number}>, res: Response, next: NextFunction) => 
{
    const team = await Team.findByPk(req.params.uuid);
    res.status(StatusCodes.OK).send(team);

})

teamsRoute.post('/teams/add', async (req: Request<{team: typeof Team}>, res: Response, next: NextFunction) => 
{
    const newTeam = await Team.create
    ({
        idArena: req.body.idArena,
        nameTeam: req.body.nameTeam,
        logo: req.body.logo,
        championships: req.body.championships,
        conference: req.body.conference
    })
    res.status(StatusCodes.OK).send(newTeam);
})

teamsRoute.put('/teams/:uuid', async (req: Request<{team: typeof Team}>, res: Response, next: NextFunction) =>
{
    const team = req.body;
    const oldTeam = await Team.findByPk(req.params.team.idTeam);
    oldTeam.nameTeam = team.nameTeam;
    oldTeam.logo = team.logo;
    oldTeam.championships = team.championships;
    oldTeam.conference = team.conference;
    res.status(StatusCodes.OK).send(oldTeam);
})

teamsRoute.delete('/teams/:uuid', (req: Request<{uuid: number}>, res:Response, next: NextFunction) =>
{
    res.sendStatus(StatusCodes.OK);
})

export default teamsRoute 