import { Router, Request, Response, NextFunction } from "express";
import {StatusCodes} from 'http-status-codes';
import ResponseObj from "../Utils/ResponseObj";

const Team = require('../interface/TeamInterface');
const teamService = require('../service/TeamService');
const teamController = Router();

teamController.get('/teams/getAllTeams', (req: Request, res: Response, next: NextFunction) =>
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

teamController.get('/teams/getAllTeamsByTitles', (req: Request, res: Response, next: NextFunction) =>
{

    teamService.getAllTeamsByTitles()
    .then((TeamDTO: typeof Team) =>
    {
        res.status(StatusCodes.OK).send(TeamDTO);
    })
    .catch((error: Error) =>
    {
        console.log("nao foi possivel buscar as teams", error);
    });

})

teamController.get('/teams/getTeamById/:uuid', (req: Request<{uuid: number}>, res: Response, next: NextFunction) =>
{
    teamService.getTeamById(req.params.uuid)
    .then((TeamDTO: typeof Team) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj(TeamDTO, null, null));
    })
    .catch((error: Error) =>
    {
            res.status(StatusCodes.OK).send(new ResponseObj("Não foi possível realizar busca", error.name, error.message));
    })

})


teamController.get('/teams/getTeamsByConference/:conference', (req: Request<{conference: string}>, res: Response, next: NextFunction) =>
{
    teamService.getTeamsByConference(req.params.conference)
    .then((TeamDTO: typeof Team) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj(TeamDTO, null, null));
    })
    .catch((error: Error) =>
    {
            res.status(StatusCodes.OK).send(new ResponseObj("Não foi possível realizar busca ", error.name, error.message));
    })

})




teamController.post('/teams/addTeam', (req: Request<{team: typeof Team}>, res: Response, next: NextFunction) =>
{
    teamService.addTeam(req.body)
    .then((TeamDTO: typeof Team) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj(TeamDTO, null, null));
    })
    .catch((error: Error) =>
    {
            res.status(StatusCodes.OK).send(new ResponseObj("Não foi possível adicionar time", error.name, error.message));
    })
    
})

teamController.put('/teams/updateTeam/:uuid', (req: Request<{team: typeof Team}>, res: Response, next: NextFunction) =>
{
    teamService.updateTeam(req.body)
   .then((TeamDTO: typeof Team) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj(TeamDTO, null, null));
    })
    .catch((error: Error) =>
    {
            res.status(StatusCodes.OK).send(new ResponseObj("Não foi possível atualizar time", error.name, error.message));
    })
    
})

teamController.delete('/teams/deleteTeam/:uuid', (req: Request<{uuid: number}>, res:Response, next: NextFunction) =>
{
    teamService.deleteTeam(req.params.uuid)
   .then((TeamDTO: typeof Team) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj(TeamDTO, null, null));
    })
    .catch((error: Error) =>
    {
            res.status(StatusCodes.OK).send(new ResponseObj("Não foi possível deletar time", error.name, error.message));
    })
})

export default teamController 