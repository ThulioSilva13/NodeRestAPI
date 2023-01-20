import express, {Request, Response, NextFunction} from 'express';
import arenasRoute from './routes/Arenas.route';
import playersRoute from './routes/Players.route';
import statusRoute from './routes/Status.route';
import teamsRoute from './routes/Teams.route';

const app = express();

//configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//configuração de rotas
app.use(statusRoute);
app.use(playersRoute);
app.use(teamsRoute);
app.use(arenasRoute);



//inicialização do servidor

app.listen(3000, () => 
{
    console.log("Aplicação executando na porta 3000");
})