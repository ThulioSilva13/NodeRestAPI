import express, {Request, Response, NextFunction} from 'express';
import userController from './controller/UserController';
import moodController from './controller/MoodController';
import statusRoute from './controller/Status.route';
import informativoController from './controller/InformativoController';

const app = express();

//configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//configuração de rotas
app.use(statusRoute);
app.use(moodController);
app.use(informativoController);
app.use(userController);



//inicialização do servidor

app.listen(3000, () => 
{
    console.log("Aplicação executando na porta 3000");
})