import {
    Router
} from 'express';
import TaskController from '../controllers/task.controller';

const tasksRouter = Router();
const taskController = new TaskController();

tasksRouter.get('/', (req: any, res: any) => {
    taskController.getTasks(req,res);
});


tasksRouter.get('/:id', (req: any, res: any) => {
    taskController.getTaskById(req,res);
})

tasksRouter.delete('/:id', (req: any, res: any) => {
    taskController.deleteTaskById(req,res);
})

tasksRouter.post('/', (req: any, res: any) => {
    taskController.postTask(req,res);
})

tasksRouter.put('/:id', (req: any, res: any) => {
    taskController.putTask(req,res);
})



export default tasksRouter;