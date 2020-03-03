
import {Request, Response} from "express";
import { ContactController } from "../controllers/crmController";
import { UserController } from '../controllers/userController';
import { NodesController } from "../controllers/nodes.controller";


export class Routes {
    public contactController: ContactController = new ContactController();
    public userController : UserController = new UserController();
    public nodesController = new NodesController();

    public routes(app): void {


        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        });

        //Nods
        app.route("/nodes")
        .get(this.nodesController.index)
        .post(this.nodesController.create);
        app.route("/nodes/:id")
        .get(this.nodesController.show);

        // Contact
        app.route('/contact')
        .get(this.contactController.getContacts)
        .post(this.contactController.addNewContact);
        app.route('/contact/:contactId')
        .get(this.contactController.getContactWithID)
        .put(this.contactController.updateContact)
        .delete(this.contactController.deleteContact);

        // User
        app.route('/user')
        .get(this.userController.getUser)
        .post(this.userController.createUser);    
        app.route('/user/:userId')
        .get(this.userController.getUserById);

    }


}