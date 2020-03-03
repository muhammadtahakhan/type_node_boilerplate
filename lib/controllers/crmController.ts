import { Request, Response } from 'express';

export class ContactController{

    public getContacts (req: Request, res: Response) {
        res.send('contact');
    }


    public addNewContact (req: Request, res: Response) {
        res.send('contact created');
    }

    public getContactWithID (req: Request, res: Response) {
        res.send('contact by id');
    }

    public updateContact (req: Request, res: Response) {
        res.send('contact udpated');
    }

    public deleteContact (req: Request, res: Response) {
        res.send('contact deleted');
    }


}