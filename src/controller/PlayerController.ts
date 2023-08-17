import { Router, Request, Response, NextFunction } from "express";
import {StatusCodes} from 'http-status-codes';
import ResponseObj from "../Utils/ResponseObj";
import responseObj from "../Utils/ResponseObj";

const Player = require('../interface/PlayerInterface');
const playerService = require('../service/PlayerService');
const playerController = Router();

playerController.get('/players/getAllPlayers', (req: Request, res: Response, next: NextFunction) =>
{
    
    playerService.getAllPlayers()
    .then((PlayerDTO: typeof Player) => 
    {
        res.status(StatusCodes.OK).send(new ResponseObj(PlayerDTO, null, null))
    })
    .catch((error: Error) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj(null, error.name, error.message))
    });

})

playerController.get('/players/getPlayerById/:uuid', (req: Request<{uuid: number}>, res: Response, next: NextFunction) =>
{
    playerService.getPlayerById(req.body)
    .then((PlayerDTO: typeof Player) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj(PlayerDTO, null, null));
    })
    .catch((error: Error) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj(null, error.name, error.message))
    })

})
playerController.get('/players/getPlayerByTeam/:uuid', (req: Request<{uuid: number}>, res: Response, next: NextFunction) =>
{
    playerService.getPlayerByTeam(req.body)
    .then((PlayerDTO: typeof Player) =>
    {

        res.status(StatusCodes.OK).send(PlayerDTO);
    })
    .catch((error: Error) =>
    {
        console.log("Não foi possível buscar player", error);
    })

})

playerController.post('/players/addPlayer', (req: Request<{player: typeof Player}>, res: Response, next: NextFunction) =>
{
    playerService.addPlayer(req.body)
    .then((PlayerDTO: typeof Player) =>
    {
        res.status(StatusCodes.OK).send(PlayerDTO);
    })
    .catch((error: Error) =>
    {
        console.log("Não foi possível adicionar player", error);
    })
    
})

playerController.put('/players/updatePlayer', (req: Request<{player: typeof Player}>, res: Response, next: NextFunction) =>
{
    playerService.updatePlayer(req.body)
    .then((PlayerDTO: typeof Player) => 
    {
        res.status(StatusCodes.OK).send(PlayerDTO);
    })
    .catch((error: Error) =>
    {
        console.log("Não foi possível atualizar a player", error);
    })
    
})

playerController.delete('/players/deletePlayer/:uuid', (req: Request<{uuid: number}>, res:Response, next: NextFunction) =>
{
    playerService.deletePlayer(req.params.uuid)
    .then((PlayerDTO: typeof Player) =>
    {
        res.status(StatusCodes.OK).send(PlayerDTO);
    })
    .catch((error: Error) =>
    {
        console.log("Não foi possível deletar player", error);
    })
})

export default playerController 