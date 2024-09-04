import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { OrdersController } from '../controllers/orders.controller';
import { createNewOrdersValidator } from './validators/orders.validator';

export default function defineRoute(app: Application){ 
  const controller : OrdersController= new OrdersController(); 
  const router: Router = Router(); 
    // Create a new Orders 
  router.post('/', [verifyAccess, changeTenant, ...createNewOrdersValidator, validateHeaders] ,controller.create);

    // Retrieve all orders 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout orders
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single Orders with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a Orders with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a Orders with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/orders', router); 
  }; 
