import { Application, Router } from 'express';
import validateHeaders from './validators/index.validator';
import { OrderDetailsStatusController } from '../controllers/orderDetailsStatus.controller';
import { createNewOrderDetailsStatusValidator, findAllOrderDetailsStatusValidator } from './validators/orderDetailsStatus.validator';

export default function defineRoute(app: Application){ 
  const controller : OrderDetailsStatusController= new OrderDetailsStatusController(); 
  const router: Router = Router(); 
    // Create a new OrderDetailsStatus 
  router.post('/', [...createNewOrderDetailsStatusValidator, validateHeaders] ,controller.create);

    // Retrieve all orderDetailsStatus 
  router.get('/', [...findAllOrderDetailsStatusValidator, validateHeaders], controller.findAll); 
    // Retrieve cout orderDetailsStatus
  router.get('/count', controller.getCount); 
    // Retrieve a single OrderDetailsStatus with id 
  router.get('/:id', controller.findById); 
    // Update a OrderDetailsStatus with id 
  router.put('/:id', controller.update);

    // Delete a OrderDetailsStatus with id 
  router.delete('/all', controller.deleteAll); 
    // Custom get OrderDetailsStatus 
    router.post("/custom", verifyAccess.verifyAccess, orderDetailsStatus.findCustom);

    app.use('/api/orderDetailsStatus', router); 
  }; 
