import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { OrderDetailsStatusController } from '../controllers/orderDetailsStatus.controller';
import { createNewOrderDetailsStatusValidator } from './validators/orderDetailsStatus.validator';

export default function defineRoute(app: Application){ 
  const controller : OrderDetailsStatusController= new OrderDetailsStatusController(); 
  const router: Router = Router(); 
    // Create a new OrderDetailsStatus 
  router.post('/', [verifyAccess, changeTenant, ...createNewOrderDetailsStatusValidator, validateHeaders] ,controller.create);

    // Retrieve all orderDetailsStatus 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout orderDetailsStatus
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single OrderDetailsStatus with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a OrderDetailsStatus with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a OrderDetailsStatus with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/orderDetailsStatus', router); 
  }; 
