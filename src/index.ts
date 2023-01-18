import express, {Request, Response, NextFunction} from 'express';
import playersRoute from './routes/Players.route';

const app = express();

app.use(playersRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => 
{
    res.status(200).send({ foo: 'funciona'});
})

app.listen(3000, () => 
{
    console.log("Aplicação executando na porta 3000");
})