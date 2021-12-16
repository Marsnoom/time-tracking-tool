import {
    Router
} from 'express';
import {
    UserModel
} from '../models/user.model';

const usersRouter = Router();

let users: UserModel[] = [{
        id: 1,
        firstname: "Domenic",
        lastname: "Schumacher",
        mail: "dome.codes@gmail.com",
        username: "dome",
        password: "ultrageheim"
    },
    {
        id: 2,
        firstname: "René",
        lastname: "Zeigler",
        mail: "rene.codes@gmail.com",
        username: "reezi",
        password: "ultrageheim"
    }
];

usersRouter.get('/', (req: any, res: any) => {
    res.send(users)
})

usersRouter.get('/:id', (req: any, res: any) => {
    let id = req.params.id;
    console.log(req.params.id);
    for (let user of users) {
        if (user.id == id) {
            res.send(user)
        }
    }
    res.send("klappt halt nicht was du vorhast");
})

usersRouter.delete('/:id', (req: any, res: any) => {
    let id = req.params.id;
    for (let user of users) {
        if (user.id == id) {
            let index = users.indexOf(user);

            users.splice(index, 1);
            res.send(users);
        }
    }
    res.send("klappt halt nicht was du vorhast");
})

usersRouter.post('/', (req: any, res: any) => {
    let user = req.body;
    users.push(user);
    res.send(user);
})

usersRouter.put('/:id', (req: any, res: any) => {
    let id = req.params.id;
    let incomingUser = req.body;
    for (let user of users) {
        if (user.id == id) {
            let index = users.indexOf(user);

            users[index] = incomingUser;
            res.send(users);
        }
    }
})

export default usersRouter;