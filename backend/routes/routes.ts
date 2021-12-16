import { Router } from 'express';
import projekteRoutes from './projekt.routes';
import taskRoutes from './task.routes';
import userRoutes from './user.routes';

const routes = Router();

routes.use('/tasks', taskRoutes);
routes.use('/projekte', projekteRoutes);
routes.use('/user', userRoutes);

export default routes;