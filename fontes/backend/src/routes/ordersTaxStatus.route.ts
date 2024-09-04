import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { OrdersTaxStatusController } from '../controllers/ordersTaxStatus.controller';
import { createNewOrdersTaxStatusValidator } from './validators/ordersTaxStatus.validator';

export default function defineRoute(app: Application){ 
  const controller : OrdersTaxStatusController= new OrdersTaxStatusController(); 
  const router: Router = Router(); 
    // Create a new OrdersTaxStatus 
  router.post('/', [verifyAccess, changeTenant, ...createNewOrdersTaxStatusValidator, validateHeaders] ,controller.create);

    // Retrieve all ordersTaxStatus 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout ordersTaxStatus
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single OrdersTaxStatus with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a OrdersTaxStatus with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a OrdersTaxStatus with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/ordersTaxStatus', router); 
  }; 
