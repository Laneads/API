
import { Router } from 'express';
import { uploadController } from '../controllers/uploadController';
import { confirmController } from '../controllers/confirmController';
import { listController } from '../controllers/listController';

const routes = Router();

routes.post('/upload', uploadController);
routes.patch('/confirm', confirmController);
routes.get('/:customer_code/list', listController);

export { routes };
