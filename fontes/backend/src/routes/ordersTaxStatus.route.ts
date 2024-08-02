import { Application, Router } from 'express';
import validateHeaders from './validators/index.validator';
import { OrdersTaxStatusController } from '../controllers/ordersTaxStatus.controller';
import { createNewOrdersTaxStatusValidator, findAllOrdersTaxStatusValidator } from './validators/ordersTaxStatus.validator';

export default function defineRoute(app: Application){ 
  const controller : OrdersTaxStatusController= new OrdersTaxStatusController(); 
  const router: Router = Router(); 
    // Create a new OrdersTaxStatus 
  router.post('/', [...createNewOrdersTaxStatusValidator, validateHeaders] ,controller.create);

    // Retrieve all ordersTaxStatus 
  router.get('/', [...findAllOrdersTaxStatusValidator, validateHeaders], controller.findAll); 
    // Retrieve cout ordersTaxStatus
  router.get('/count', controller.getCount); 
    // Retrieve a single OrdersTaxStatus with id 
  router.get('/:id', controller.findById); 
    // Update a OrdersTaxStatus with id 
  router.put('/:id', controller.update);

    // Delete a OrdersTaxStatus with id 
  router.delete('/all', controller.delete); 

    app.use('/api/ordersTaxStatus', router); 
  }; 
