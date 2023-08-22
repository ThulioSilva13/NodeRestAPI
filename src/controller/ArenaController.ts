import { Router, Request, Response, NextFunction } from "express";
import {StatusCodes} from 'http-status-codes';
import ResponseObj from "../Utils/ResponseObj";

const Arena = require('../interface/ArenaInterface');
const arenaService = require('../service/ArenaService');
const arenaController = Router();

arenaController.get('/arenas/getAllArenas', (req: Request, res: Response, next: NextFunction) =>
{
    
    arenaService.getAllArenas()
    .then((ArenaDTO: typeof Arena) => 
    {
        res.status(StatusCodes.OK).send(new ResponseObj(ArenaDTO, null, null));
    })
    .catch((error: Error) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj("Não foi possível realizar busca", error.name, error.message));
    });

})
arenaController.get('/arenas/getAllArenasByCapacity', (req: Request, res: Response, next: NextFunction) =>
{

    arenaService.getAllArenasByCapacity()
    .then((ArenaDTO: typeof Arena) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj(ArenaDTO, null, null));
    })
    .catch((error: Error) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj("Não foi possível realizar busca", error.name, error.message));
    });

})
arenaController.get('/arenas/getAllArenasByOpeningDate', (req: Request, res: Response, next: NextFunction) =>
{

    arenaService.getAllArenasByOpeningDate()
    .then((ArenaDTO: typeof Arena) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj(ArenaDTO, null, null));
    })
    .catch((error: Error) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj("Não foi possível realizar busca", error.name, error.message));
    });

})

arenaController.get('/arenas/getArenaById/:uuid', (req: Request<{uuid: number}>, res: Response, next: NextFunction) =>
{
    arenaService.getArenaById(req.params.uuid)
    .then((ArenaDTO: typeof Arena) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj(ArenaDTO, null, null));
    })
    .catch((error: Error) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj("Não foi possível realizar busca", error.name, error.message));
    })

})

arenaController.post('/arenas/addArena', (req: Request<{arena: typeof Arena}>, res: Response, next: NextFunction) =>
{
    arenaService.addArena(req.body)
    .then((ArenaDTO: typeof Arena) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj(ArenaDTO, null, null));
    })
    .catch((error: Error) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj("Não foi possível adicionar Arena", error.name, error.message));
    })
    
})

arenaController.put('/arenas/updateArena/:uuid', (req: Request<{arena: typeof Arena}>, res: Response, next: NextFunction) =>
{
    arenaService.updateArena(req.body)
    .then((ArenaDTO: typeof Arena) => 
    {
        res.status(StatusCodes.OK).send(new ResponseObj(ArenaDTO, null, null));
    })
    .catch((error: Error) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj("Não foi possível atualizar Arena", error.name, error.message));
    })
    
})

arenaController.delete('/arenas/deleteArena/:uuid', (req: Request<{uuid: number}>, res:Response, next: NextFunction) =>
{
    arenaService.deleteArena(req.params.uuid)
    .then((ArenaDTO: typeof Arena) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj(ArenaDTO, null, null));
    })
    .catch((error: Error) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj("Não foi possível deletar Arena", error.name, error.message));
    })
})

export default arenaController 