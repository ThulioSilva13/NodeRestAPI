import { Router, Request, Response, NextFunction } from "express";
import {StatusCodes} from 'http-status-codes';

const Player = require('../interface/PlayerInterface');
const playerService = require('../service/PlayerService');
const playerController = Router();

playerController.get('/players/getAll', (req: Request, res: Response, next: NextFunction) => 
{
    
    playerService.getAllPlayers()
    .then((PlayerDTO: typeof Player) => 
    {
        res.status(StatusCodes.OK).send(PlayerDTO);
    })
    .catch((error: Error) =>
    {
        console.log("nao foi possivel buscar as players", error);
    });

})

playerController.get('/players/get/:uuid', (req: Request<{uuid: number}>, res: Response, next: NextFunction) => 
{
    playerService.getPlayerById(req.body)
    .then((PlayerDTO: typeof Player) =>
    {
        res.status(StatusCodes.OK).send(PlayerDTO);
    })
    .catch((error: Error) =>
    {
        console.log("Não foi possível buscar player", error);
    })

})

playerController.post('/players/add', (req: Request<{player: typeof Player}>, res: Response, next: NextFunction) => 
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

playerController.put('/players/update/:uuid', (req: Request<{player: typeof Player}>, res: Response, next: NextFunction) =>
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

playerController.delete('/players/delete/:uuid', (req: Request<{uuid: number}>, res:Response, next: NextFunction) =>
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