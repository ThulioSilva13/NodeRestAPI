import { Router, Request, Response, NextFunction } from "express";
import {StatusCodes} from 'http-status-codes';

const Arena = require('../interface/ArenaInterface');
const arenaService = require('../service/ArenaService');
const arenaController = Router();

arenaController.get('/arenas/getAll', (req: Request, res: Response, next: NextFunction) => 
{
    
    arenaService.getAllArenas()
    .then((ArenaDTO: typeof Arena) => 
    {
        res.status(StatusCodes.OK).send(ArenaDTO);
    })
    .catch((error: Error) =>
    {
        console.log("nao foi possivel buscar as arenas", error);
    });

})

arenaController.get('/arenas/get/:uuid', (req: Request<{uuid: number}>, res: Response, next: NextFunction) => 
{
    arenaService.getArenaById(req.params.uuid)
    .then((ArenaDTO: typeof Arena) =>
    {
        res.status(StatusCodes.OK).send(ArenaDTO);
    })
    .catch((error: Error) =>
    {
        console.log("Não foi possível buscar arena", error);
    })

})

arenaController.post('/arenas/add', (req: Request<{arena: typeof Arena}>, res: Response, next: NextFunction) => 
{
    arenaService.addArena(req.body)
    .then((ArenaDTO: typeof Arena) =>
    {
        res.status(StatusCodes.OK).send(ArenaDTO);
    })
    .catch((error: Error) =>
    {
        console.log("Não foi possível adicionar arena", error);
    })
    
})

arenaController.put('/arenas/update/:uuid', (req: Request<{arena: typeof Arena}>, res: Response, next: NextFunction) =>
{
    arenaService.updateArena(req.body)
    .then((ArenaDTO: typeof Arena) => 
    {
        res.status(StatusCodes.OK).send(ArenaDTO);
    })
    .catch((error: Error) =>
    {
        console.log("Não foi possível atualizar a arena", error);
    })
    
})

arenaController.delete('/arenas/delete/:uuid', (req: Request<{uuid: number}>, res:Response, next: NextFunction) =>
{
    arenaService.deleteArena(req.params.uuid)
    .then((ArenaDTO: typeof Arena) =>
    {
        res.status(StatusCodes.OK).send(ArenaDTO);
    })
    .catch((error: Error) =>
    {
        console.log("Não foi possível deletar arena", error);
    })
})

export default arenaController 