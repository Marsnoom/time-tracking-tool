import { Router } from 'express';
import taskRoutes from './taskRoutes';

const routes = Router();

routes.use('/tasks', taskRoutes);

export default routes;