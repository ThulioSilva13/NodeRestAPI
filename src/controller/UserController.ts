import { Router, Request, Response, NextFunction } from "express";
import {StatusCodes} from 'http-status-codes';
import ResponseObj from "../Utils/ResponseObj";

const User = require('../interface/UserInterface');
const userService = require('../service/UserService');
const userController = Router();

userController.get('/users/getAllUsers', (req: Request, res: Response, next: NextFunction) =>
{
    
    userService.getAllUsers()
    .then((UserDTO: typeof User) => 
    {
        res.status(StatusCodes.OK).send(new ResponseObj(UserDTO, null, null));
    })
    .catch((error: Error) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj("Não foi possível realizar busca", error.name, error.message));
    });

})
userController.get('/users/getAllUsersByNivelAnsiedade', (req: Request, res: Response, next: NextFunction) =>
{

    userService.getAllUsersByNivelAnsiedade()
    .then((UserDTO: typeof User) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj(UserDTO, null, null));
    })
    .catch((error: Error) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj("Não foi possível realizar busca", error.name, error.message));
    });

})
userController.get('/users/getAllUsersByDataNascimento', (req: Request, res: Response, next: NextFunction) =>
{

    userService.getAllUsersByDataNascimento()
    .then((UserDTO: typeof User) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj(UserDTO, null, null));
    })
    .catch((error: Error) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj("Não foi possível realizar busca", error.name, error.message));
    });

})

userController.get('/users/getUserById/:uuid', (req: Request<{uuid: number}>, res: Response, next: NextFunction) =>
{
    userService.getUserById(req.params.uuid)
    .then((UserDTO: typeof User) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj(UserDTO, null, null));
    })
    .catch((error: Error) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj("Não foi possível realizar busca", error.name, error.message));
    })

})

userController.post('/users/addUser', (req: Request<{user: typeof User}>, res: Response, next: NextFunction) =>
{
    userService.addUser(req.body)
    .then((UserDTO: typeof User) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj(UserDTO, null, null));
    })
    .catch((error: Error) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj("Não foi possível adicionar User", error.name, error.message));
    })
    
})

userController.put('/users/updateUser/:uuid', (req: Request<{user: typeof User}>, res: Response, next: NextFunction) =>
{
    userService.updateUser(req.body)
    .then((UserDTO: typeof User) => 
    {
        res.status(StatusCodes.OK).send(new ResponseObj(UserDTO, null, null));
    })
    .catch((error: Error) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj("Não foi possível atualizar User", error.name, error.message));
    })
    
})

userController.delete('/users/deleteUser/:uuid', (req: Request<{uuid: number}>, res:Response, next: NextFunction) =>
{
    userService.deleteUser(req.params.uuid)
    .then((UserDTO: typeof User) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj(UserDTO, null, null));
    })
    .catch((error: Error) =>
    {
        res.status(StatusCodes.OK).send(new ResponseObj("Não foi possível deletar User", error.name, error.message));
    })
})

export default userController 