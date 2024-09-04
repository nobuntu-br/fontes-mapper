import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { OrderDetailsController } from '../controllers/orderDetails.controller';
import { createNewOrderDetailsValidator } from './validators/orderDetails.validator';

export default function defineRoute(app: Application){ 
  const controller : OrderDetailsController= new OrderDetailsController(); 
  const router: Router = Router(); 
    // Create a new OrderDetails 
  router.post('/', [verifyAccess, changeTenant, ...createNewOrderDetailsValidator, validateHeaders] ,controller.create);

    // Retrieve all orderDetails 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout orderDetails
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single OrderDetails with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a OrderDetails with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a OrderDetails with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/orderDetails', router); 
  }; 
