import { Application, Router } from 'express';
import validateHeaders from './validators/index.validator';
import { OrdersController } from '../controllers/orders.controller';
import { createNewOrdersValidator, findAllOrdersValidator } from './validators/orders.validator';

export default function defineRoute(app: Application){ 
  const controller : OrdersController= new OrdersController(); 
  const router: Router = Router(); 
    // Create a new Orders 
  router.post('/', [...createNewOrdersValidator, validateHeaders] ,controller.create);

    // Retrieve all orders 
  router.get('/', [...findAllOrdersValidator, validateHeaders], controller.findAll); 
    // Retrieve cout orders
  router.get('/count', controller.getCount); 
    // Retrieve a single Orders with id 
  router.get('/:id', controller.findById); 
    // Update a Orders with id 
  router.put('/:id', controller.update);

    // Delete a Orders with id 
  router.delete('/all', controller.deleteAll); 
    // Custom get Orders 
    router.post("/custom", verifyAccess.verifyAccess, orders.findCustom);

    app.use('/api/orders', router); 
  }; 
