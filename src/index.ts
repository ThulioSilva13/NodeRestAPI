import express, {Request, Response, NextFunction} from 'express';
import playersRoute from './routes/Players.route';
import statusRoute from './routes/Status.route';

const app = express();
//configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//configuração de rotas
app.use(statusRoute);
app.use(playersRoute);



//inicialização do servidor

app.listen(3000, () => 
{
    console.log("Aplicação executando na porta 3000");
})