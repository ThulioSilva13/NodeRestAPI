import { Router, Request, Response, NextFunction } from "express";
import {StatusCodes} from 'http-status-codes';

const connection = require('../models/database');
const teamsRoute = Router();

teamsRoute.get('/teams', async (req: Request, res: Response, next: NextFunction) => 
{
    const query = 'SELECT * FROM TblTeam;';
    const [teamsList] = await connection.execute(query);
    console.log("lista: ",teamsList);
    const teamsListReturn = JSON.parse(teamsList);
    res.status(200).send(teamsListReturn);

})

teamsRoute.get('/teams/:uuid',(req: Request<{uuid: number}>, res: Response, next: NextFunction) => 
{
    const id = req.params.uuid;
    res.status(StatusCodes.OK).send({id});

})

teamsRoute.post('/teams/add', async (req: Request, res: Response, next: NextFunction) => 
{
    const newTeam = req.body
    const query = `INSERT INTO TblTeam (idArena, nameTeam, logo, championships, conference) 
    VALUES ('${newTeam.idArena}', '${newTeam.nameTeam}', ${newTeam.logo}, ${newTeam.championships}, ${newTeam.conference});`;
    
    const createdTeam = await connection.execute(query);
    res.status(StatusCodes.OK).send(createdTeam);
})

teamsRoute.put('/teams/:uuid', (req: Request<{uuid: number}>, res: Response, next: NextFunction) =>
{
    const id = req.params.uuid;
    const modifiedUser = req.body;
    modifiedUser.uuid = id;
    res.status(StatusCodes.OK).send(modifiedUser);
})

teamsRoute.delete('/teams/:uuid', (req: Request<{uuid: number}>, res:Response, next: NextFunction) =>
{
    res.sendStatus(StatusCodes.OK);
})

export default teamsRoute 