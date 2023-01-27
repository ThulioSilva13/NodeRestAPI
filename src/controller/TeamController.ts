import { Router, Request, Response, NextFunction } from "express";
import {StatusCodes} from 'http-status-codes';

const Team = require('../interface/TeamInterface');
const teamService = require('../service/TeamService');
const teamController = Router();

teamController.get('/teams/getAll', (req: Request, res: Response, next: NextFunction) => 
{
    
    teamService.getAllTeams()
    .then((TeamDTO: typeof Team) => 
    {
        res.status(StatusCodes.OK).send(TeamDTO);
    })
    .catch((error: Error) =>
    {
        console.log("nao foi possivel buscar as teams", error);
    });

})

teamController.get('/teams/get/:uuid', (req: Request<{uuid: number}>, res: Response, next: NextFunction) => 
{
    teamService.getTeamById(req.params.uuid)
    .then((TeamDTO: typeof Team) =>
    {
        res.status(StatusCodes.OK).send(TeamDTO);
    })
    .catch((error: Error) =>
    {
        console.log("Não foi possível buscar team", error);
    })

})

teamController.post('/teams/add', (req: Request<{team: typeof Team}>, res: Response, next: NextFunction) => 
{
    teamService.addTeam(req.body)
    .then((TeamDTO: typeof Team) =>
    {
        res.status(StatusCodes.OK).send(TeamDTO);
    })
    .catch((error: Error) =>
    {
        console.log("Não foi possível adicionar team", error);
    })
    
})

teamController.put('/teams/update/:uuid', (req: Request<{team: typeof Team}>, res: Response, next: NextFunction) =>
{
    teamService.updateTeam(req.body)
    .then((TeamDTO: typeof Team) => 
    {
        res.status(StatusCodes.OK).send(TeamDTO);
    })
    .catch((error: Error) =>
    {
        console.log("Não foi possível atualizar o team", error);
    })
    
})

teamController.delete('/teams/delete/:uuid', (req: Request<{uuid: number}>, res:Response, next: NextFunction) =>
{
    teamService.deleteTeam(req.params.uuid)
    .then((TeamDTO: typeof Team) =>
    {
        res.status(StatusCodes.OK).send(TeamDTO);
    })
    .catch((error: Error) =>
    {
        console.log("Não foi possível deletar team", error);
    })
})

export default teamController 