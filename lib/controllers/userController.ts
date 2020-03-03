import { Request, Response } from 'express';

export class UserController{

    public createUser(req: Request, res: Response){
       

        res.status(200).send({
            message: 'user created'
        })

    }

    public getUser(req:Request, res: Response){
        res.send('im user');

    }

    public getUserById(req: Request, res: Response){
        res.send('im user by id');

    }


}