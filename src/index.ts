import express, {Request, Response, NextFunction} from 'express';
import arenaController from './controller/ArenaController';
import playerController from './controller/PlayerController';
import statusRoute from './controller/Status.route';
import teamController from './controller/TeamController';

const app = express();

//configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//configuração de rotas
app.use(statusRoute);
app.use(playerController);
app.use(teamController);
app.use(arenaController);



//inicialização do servidor

app.listen(3000, () => 
{
    console.log("Aplicação executando na porta 3000");
})