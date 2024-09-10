import { Router, Request, Response, NextFunction } from "express";
import {StatusCodes} from 'http-status-codes';
import ResponseObj from "../Utils/ResponseObj";
import responseObj from "../Utils/ResponseObj";

const Mood = require('../interface/MoodInterface');
const moodService = require('../service/MoodService');
const moodController = Router();

moodController.get('/moods/getAllMoods', (req: Request, res: Response, next: NextFunction) =>
{
    
    moodService.getAllMoods()
    .then((MoodDTO: typeof Mood) => 
    {
        res.status(StatusCodes.OK).send(new ResponseObj(MoodDTO, null, null));
    })
    .catch((error: Error) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj("Não foi possível realizar busca", error.name, error.message));
    });

})

moodController.get('/moods/getMoodById/:uuid', (req: Request<{uuid: number}>, res: Response, next: NextFunction) =>
{
    moodService.getMoodById(req.body)
    .then((MoodDTO: typeof Mood) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj(MoodDTO, null, null));
    })
    .catch((error: Error) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj("Não foi possível realizar busca", error.name, error.message));
    })

})


moodController.post('/moods/addMood', (req: Request<{mood: typeof Mood}>, res: Response, next: NextFunction) =>
{
    moodService.addMood(req.body)
    .then((MoodDTO: typeof Mood) =>
    {
       res.status(StatusCodes.OK).send(new ResponseObj(MoodDTO, null, null))
    })
    .catch((error: Error) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj("Não foi possível adicionar mood", error.name, error.message));
    })
    
})

moodController.put('/moods/updateMood', (req: Request<{mood: typeof Mood}>, res: Response, next: NextFunction) =>
{
    moodService.updateMood(req.body)
    .then((MoodDTO: typeof Mood) => 
    {
        res.status(StatusCodes.OK).send(new ResponseObj(MoodDTO, null, null))
    })
    .catch((error: Error) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj("Não foi possível atualizar mood", error.name, error.message));
    })
    
})

moodController.delete('/moods/deleteMood/:uuid', (req: Request<{uuid: number}>, res:Response, next: NextFunction) =>
{
    moodService.deleteMood(req.params.uuid)
    .then((MoodDTO: typeof Mood) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj(MoodDTO, null, null))
    })
    .catch((error: Error) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj("Não foi possível deletar mood", error.name, error.message));
    })
})

export default moodController 