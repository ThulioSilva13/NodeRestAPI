import { Router, Request, Response, NextFunction } from "express";


const playersRoute = Router();

playersRoute.get('/players', (req: Request, res: Response, next: NextFunction) => 
{
    const players = [{ name: 'nome' }];
    res.status(200).send(players);

})


export default playersRoute 