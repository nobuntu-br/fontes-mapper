import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { OrdersStatusController } from '../controllers/ordersStatus.controller';
import { createNewOrdersStatusValidator } from './validators/ordersStatus.validator';

export default function defineRoute(app: Application){ 
  const controller : OrdersStatusController= new OrdersStatusController(); 
  const router: Router = Router(); 
    // Create a new OrdersStatus 
  router.post('/', [verifyAccess, changeTenant, ...createNewOrdersStatusValidator, validateHeaders] ,controller.create);

    // Retrieve all ordersStatus 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout ordersStatus
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single OrdersStatus with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a OrdersStatus with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a OrdersStatus with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/ordersStatus', router); 
  }; 
