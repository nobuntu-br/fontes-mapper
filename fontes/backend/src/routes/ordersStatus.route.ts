import { Application, Router } from 'express';
import validateHeaders from './validators/index.validator';
import { OrdersStatusController } from '../controllers/ordersStatus.controller';
import { createNewOrdersStatusValidator, findAllOrdersStatusValidator } from './validators/ordersStatus.validator';

export default function defineRoute(app: Application){ 
  const controller : OrdersStatusController= new OrdersStatusController(); 
  const router: Router = Router(); 
    // Create a new OrdersStatus 
  router.post('/', [...createNewOrdersStatusValidator, validateHeaders] ,controller.create);

    // Retrieve all ordersStatus 
  router.get('/', [...findAllOrdersStatusValidator, validateHeaders], controller.findAll); 
    // Retrieve cout ordersStatus
  router.get('/count', controller.getCount); 
    // Retrieve a single OrdersStatus with id 
  router.get('/:id', controller.findById); 
    // Update a OrdersStatus with id 
  router.put('/:id', controller.update);

    // Delete a OrdersStatus with id 
  router.delete('/all', controller.deleteAll); 
    // Custom get OrdersStatus 
    router.post("/custom", verifyAccess.verifyAccess, ordersStatus.findCustom);

    app.use('/api/ordersStatus', router); 
  }; 
