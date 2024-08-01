import { Application, Router } from 'express';
import validateHeaders from './validators/index.validator';
import { CustomersController } from '../controllers/customers.controller';
import { createNewCustomersValidator, findAllCustomersValidator } from './validators/customers.validator';

export default function defineRoute(app: Application){ 
  const controller : CustomersController= new CustomersController(); 
  const router: Router = Router(); 
    // Create a new Customers 
  router.post('/', [...createNewCustomersValidator, validateHeaders] ,controller.create);

    // Retrieve all customers 
  router.get('/', [...findAllCustomersValidator, validateHeaders], controller.findAll); 
    // Retrieve cout customers
  router.get('/count', controller.getCount); 
    // Retrieve a single Customers with id 
  router.get('/:id', controller.findById); 
    // Update a Customers with id 
  router.put('/:id', controller.update);

    // Delete a Customers with id 
  router.delete('/all', controller.deleteAll); 
    // Custom get Customers 
    router.post("/custom", verifyAccess.verifyAccess, customers.findCustom);

    app.use('/api/customers', router); 
  }; 
