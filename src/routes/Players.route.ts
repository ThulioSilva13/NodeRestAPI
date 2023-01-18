import { Router, Request, Response, NextFunction } from "express";
import {StatusCodes} from 'http-status-codes';

const connection = require('../models/database');
const playersRoute = Router();

playersRoute.get('/players', async (req: Request, res: Response, next: NextFunction) => 
{
    const query = 'SELECT * FROM TblPlayer;';
    const [playersList] = await connection.execute(query);
    console.log("lista: ",playersList);
    const playersListReturn = JSON.parse(playersList);
    res.status(200).send(playersListReturn);

})

playersRoute.get('/players/:uuid',(req: Request<{uuid: number}>, res: Response, next: NextFunction) => 
{
    const id = req.params.uuid;
    res.status(StatusCodes.OK).send({id});

})

playersRoute.post('/players/add', async (req: Request, res: Response, next: NextFunction) => 
{
    const newPlayer = req.body
    const query = `INSERT INTO TblPlayer (idTeam, namePlayer, number, position, draft, nationality) 
    VALUES ('${newPlayer.idTeam}', '${newPlayer.namePlayer}', '${newPlayer.number}', ${newPlayer.position}, 
    ${newPlayer.draft}, ${newPlayer.nationality});`;
    
    const createdPlayer = await connection.execute(query);
    res.status(StatusCodes.OK).send(createdPlayer);
})

playersRoute.put('/players/:uuid', (req: Request<{uuid: number}>, res: Response, next: NextFunction) =>
{
    const id = req.params.uuid;
    const modifiedUser = req.body;
    modifiedUser.uuid = id;
    res.status(StatusCodes.OK).send(modifiedUser);
})

playersRoute.delete('/players/:uuid', (req: Request<{uuid: number}>, res:Response, next: NextFunction) =>
{
    res.sendStatus(StatusCodes.OK);
})

export default playersRoute 