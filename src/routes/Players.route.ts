import { Router, Request, Response, NextFunction } from "express";
import {StatusCodes} from 'http-status-codes';


const connection = require('../models/database');
const Player = require('../models/PlayerModel');
const playersRoute = Router();

playersRoute.get('/players', async (req: Request, res: Response, next: NextFunction) => 
{
    const listPlayers = await Player.findAll();
    res.status(200).send(listPlayers);

})

playersRoute.get('/players/get/:uuid', async (req: Request<{uuid: number}>, res: Response, next: NextFunction) => 
{
    const player = await Player.findByPk(req.params.uuid);
    res.status(StatusCodes.OK).send(player);

})

playersRoute.post('/players/add', async (req: Request<{player: typeof Player}>, res: Response, next: NextFunction) => 
{
    const newPlayer = await Player.create(
    {
        idTeam: req.body.idTeam,
        namePlayer: req.body.namePlayer,
        number: req.body.number,
        position: req.body.position,
        draft: req.body.draft,
        nationality: req.body.nationality,
    })
    res.status(StatusCodes.OK).send(newPlayer);
})

playersRoute.put('/players/:uuid', async (req: Request<{player: typeof Player}>, res: Response, next: NextFunction) =>
{
    const player = req.body;
    const oldPlayer = await Player.findByPk(req.params.player.idPlayer);
    oldPlayer.namePlayer = player.namePlayer;
    oldPlayer.number = player.number;
    oldPlayer.positon = player.position;
    oldPlayer.draft = player.draft;
    oldPlayer.nationality = player.nationality;
    res.status(StatusCodes.OK).send(oldPlayer);
})

playersRoute.delete('/players/:uuid', (req: Request<{uuid: number}>, res:Response, next: NextFunction) =>
{
    res.sendStatus(StatusCodes.OK);
})

export default playersRoute 