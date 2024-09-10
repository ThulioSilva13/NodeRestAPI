import { Router, Request, Response, NextFunction } from "express";
import {StatusCodes} from 'http-status-codes';
import ResponseObj from "../Utils/ResponseObj";

const Informativo = require('../interface/InformativoInterface');
const informativoService = require('../service/InformativoService');
const informativoController = Router();

informativoController.get('/informativos/getAllInformativos', (req: Request, res: Response, next: NextFunction) =>
{
    
    informativoService.getAllInformativos()
    .then((InformativoDTO: typeof Informativo) => 
    {
        res.status(StatusCodes.OK).send(new ResponseObj(InformativoDTO, null, null));
    })
    .catch((error: Error) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj("Não foi possível realizar busca", error.name, error.message));
    });

})

informativoController.get('/informativos/getAllInformativosByTitulo', (req: Request, res: Response, next: NextFunction) =>
{

    informativoService.getAllInformativosByTitulo()
    .then((InformativoDTO: typeof Informativo) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj(InformativoDTO, null, null));
    })
    .catch((error: Error) =>
    {
       res.status(StatusCodes.OK).send(new ResponseObj("Não foi possível realizar busca", error.name, error.message));
    });

})

informativoController.get('/informativos/getInformativoById/:uuid', (req: Request<{uuid: number}>, res: Response, next: NextFunction) =>
{
    informativoService.getInformativoById(req.params.uuid)
    .then((InformativoDTO: typeof Informativo) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj(InformativoDTO, null, null));
    })
    .catch((error: Error) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj("Não foi possível realizar busca", error.name, error.message));
    })

})

informativoController.get('/informativos/getAllInformativosByDataPublicacao', (req: Request, res: Response, next: NextFunction) =>
    {
        
        informativoService.getAllInformativosByDataPublicacao()
        .then((InformativoDTO: typeof Informativo) => 
        {
            res.status(StatusCodes.OK).send(new ResponseObj(InformativoDTO, null, null));
        })
        .catch((error: Error) =>
        {
            res.status(StatusCodes.OK).send(new ResponseObj("Não foi possível realizar busca", error.name, error.message));
        });
    
    })

informativoController.get('/informativos/getInformativosByTitulo/:titulo', (req: Request<{titulo: string}>, res: Response, next: NextFunction) =>
{
    informativoService.getInformativosByTitulo(req.params.titulo)
    .then((InformativoDTO: typeof Informativo) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj(InformativoDTO, null, null));
    })
    .catch((error: Error) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj("Não foi possível realizar busca ", error.name, error.message));
    })

})




informativoController.post('/informativos/addInformativo', (req: Request<{informativo: typeof Informativo}>, res: Response, next: NextFunction) =>
{
    informativoService.addInformativo(req.body)
    .then((InformativoDTO: typeof Informativo) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj(InformativoDTO, null, null));
    })
    .catch((error: Error) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj("Não foi possível adicionar time", error.name, error.message));
    })
    
})

informativoController.put('/informativos/updateInformativo/:uuid', (req: Request<{informativo: typeof Informativo}>, res: Response, next: NextFunction) =>
{
    informativoService.updateInformativo(req.body)
   .then((InformativoDTO: typeof Informativo) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj(InformativoDTO, null, null));
    })
    .catch((error: Error) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj("Não foi possível atualizar time", error.name, error.message));
    })
    
})

informativoController.delete('/informativos/deleteInformativo/:uuid', (req: Request<{uuid: number}>, res:Response, next: NextFunction) =>
{
    informativoService.deleteInformativo(req.params.uuid)
   .then((InformativoDTO: typeof Informativo) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj(InformativoDTO, null, null));
    })
    .catch((error: Error) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj("Não foi possível deletar time", error.name, error.message));
    })
})

export default informativoController 