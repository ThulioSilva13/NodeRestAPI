import { Router, Request, Response, NextFunction } from "express";
import {StatusCodes} from 'http-status-codes';

const connection = require('../models/database');
const Arena = require('../models/ArenaModel');
const arenasRoute = Router();

arenasRoute.get('/arenas/getAll', async (req: Request, res: Response, next: NextFunction) => 
{
    
    const listArenas = await Arena.findAll();
    res.status(StatusCodes.OK).send(listArenas);

})

arenasRoute.get('/arenas/get/:uuid', async(req: Request<{uuid: number}>, res: Response, next: NextFunction) => 
{
    const arena = await Arena.findByPk(req.params.uuid);
    res.status(StatusCodes.OK).send(arena);

})

arenasRoute.post('/arenas/add', async (req: Request<{arena: typeof Arena}>, res: Response, next: NextFunction) => 
{
    const newArena = await Arena.create
    ({
        nameArena: req.body.nameArena,
        location: req.body.location,
        capacity: req.body.capacity,
        openingDate: req.body.openingDate
    })
    res.status(StatusCodes.OK).send(newArena);
})

arenasRoute.put('/arenas/update/:uuid', async(req: Request<{arena: typeof Arena}>, res: Response, next: NextFunction) =>
{
    const arena = req.body;
    const oldArena = await Arena.findByPk(req.params.arena.idArena);
    oldArena.nameArena = arena.nameArena;
    oldArena.location = arena.location;
    oldArena.capacity = arena.capacity;
    oldArena.updatedAt = new Date();
    res.status(StatusCodes.OK).send(oldArena);
})

arenasRoute.delete('/arenas/:uuid', (req: Request<{uuid: number}>, res:Response, next: NextFunction) =>
{
    res.sendStatus(StatusCodes.OK);
})

export default arenasRoute 