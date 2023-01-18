import { Router, Request, Response, NextFunction } from "express";
import {StatusCodes} from 'http-status-codes';

const playersRoute = Router();

playersRoute.get('/players', (req: Request, res: Response, next: NextFunction) => 
{
    const players = [{ name: 'nome' }];
    res.status(200).send(players);

})

playersRoute.get('/players/:uuid',(req: Request<{uuid: number}>, res: Response, next: NextFunction) => 
{
    const id = req.params.uuid;
    res.status(StatusCodes.OK).send({id});

})

playersRoute.post('/players', (req: Request, res: Response, next: NextFunction) => 
{
    const newPlayer = req.body
    res.status(StatusCodes.CREATED).send(newPlayer);
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