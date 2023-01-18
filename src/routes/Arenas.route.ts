import { Router, Request, Response, NextFunction } from "express";
import {StatusCodes} from 'http-status-codes';

const connection = require('../models/database');
const arenasRoute = Router();

arenasRoute.get('/arenas', async (req: Request, res: Response, next: NextFunction) => 
{
    const query = 'SELECT * FROM TblArena;';
    const [arenasList] = await connection.execute(query);
    console.log("lista: ",arenasList);
    const arenasListReturn = JSON.parse(arenasList);
    res.status(200).send(arenasListReturn);

})

arenasRoute.get('/arenas/:uuid',(req: Request<{uuid: number}>, res: Response, next: NextFunction) => 
{
    const id = req.params.uuid;
    res.status(StatusCodes.OK).send({id});

})

arenasRoute.post('/arenas/add', async (req: Request, res: Response, next: NextFunction) => 
{
    const newArena = req.body
    const query = `INSERT INTO TblArena (nameArena, location, capacity, openingDate) 
    VALUES ('${newArena.nameArena}', '${newArena.location}', ${newArena.capacity}, str_to_date("${newArena.openingDate}", "%d/%m/%Y"));`;
    
    const createdArena = await connection.execute(query);
    res.status(StatusCodes.OK).send(createdArena);
})

arenasRoute.put('/arenas/:uuid', (req: Request<{uuid: number}>, res: Response, next: NextFunction) =>
{
    const id = req.params.uuid;
    const modifiedUser = req.body;
    modifiedUser.uuid = id;
    res.status(StatusCodes.OK).send(modifiedUser);
})

arenasRoute.delete('/arenas/:uuid', (req: Request<{uuid: number}>, res:Response, next: NextFunction) =>
{
    res.sendStatus(StatusCodes.OK);
})

export default arenasRoute 