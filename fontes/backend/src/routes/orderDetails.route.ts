import { Application, Router } from 'express';
import validateHeaders from './validators/index.validator';
import { OrderDetailsController } from '../controllers/orderDetails.controller';
import { createNewOrderDetailsValidator, findAllOrderDetailsValidator } from './validators/orderDetails.validator';

export default function defineRoute(app: Application){ 
  const controller : OrderDetailsController= new OrderDetailsController(); 
  const router: Router = Router(); 
    // Create a new OrderDetails 
  router.post('/', [...createNewOrderDetailsValidator, validateHeaders] ,controller.create);

    // Retrieve all orderDetails 
  router.get('/', [...findAllOrderDetailsValidator, validateHeaders], controller.findAll); 
    // Retrieve cout orderDetails
  router.get('/count', controller.getCount); 
    // Retrieve a single OrderDetails with id 
  router.get('/:id', controller.findById); 
    // Update a OrderDetails with id 
  router.put('/:id', controller.update);

    // Delete a OrderDetails with id 
  router.delete('/all', controller.deleteAll); 
    // Custom get OrderDetails 
    router.post("/custom", verifyAccess.verifyAccess, orderDetails.findCustom);

    app.use('/api/orderDetails', router); 
  }; 
