import {
    Router
} from 'express';
import {
    TaskModel
} from '../models/task.model';

const tasksRouter = Router();

let tasks: TaskModel[] = [{
        id: 1,
        label: "Test",
        firma: "Firma",
        referenceProjectId: 1,
        bearbeiter: "Domenic Schumacher",
        description: "desdsdsd"
    },
    {
        id: 2,
        label: "Test2",
        firma: "Firma2",
        referenceProjectId: 2,
        bearbeiter: "Domenic Schumacher2",
        description: "desdsdsd2"
    }
];

tasksRouter.get('/', (req: any, res: any) => {
    res.send(tasks)
})

tasksRouter.get('/:id', (req: any, res: any) => {
    let id = req.params.id;
    console.log(req.params.id);
    for (let task of tasks) {
        if (task.id == id) {
            res.send(task)
        } else {
            res.send("klappt halt nicht was du vorhast");
        }
    }
})

tasksRouter.delete('/:id', (req: any, res: any) => {
    let id = req.params.id;
    for (let task of tasks) {
        if (task.id == id) {
            let index = tasks.indexOf(task);

            tasks.splice(index, 1);
            res.send(tasks);
        }
    }
    res.send("klappt halt nicht was du vorhast");
})

tasksRouter.post('/', (req: any, res: any) => {
    let task = req.body;
    tasks.push(task);
    res.send(task);
})

tasksRouter.put('/:id', (req: any, res: any) => {
    let id = req.params.id;
    let incomingTask = req.body;
    for (let task of tasks) {
        if (task.id == id) {
            let index = tasks.indexOf(task);

            tasks[index] = incomingTask;
            res.send(tasks);
        }
    }
})

export default tasksRouter;