import { Router, Request, Response, NextFunction } from "express";
import {StatusCodes} from 'http-status-codes';

const playersRoute = Router();

playersRoute.get('/players', (req: Request, res: Response, next: NextFunction) => 
{
    const players = [{ name: 'nome' }];
    res.status(200).send(players);

})

playersRoute.get('/players/:uuid',(req: Request, res: Response, next: NextFunction) => 
{
    const id = req.params.uuid;
    res.status(StatusCodes.OK).send({id});

})

export default playersRoute 