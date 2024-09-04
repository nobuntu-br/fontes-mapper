import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { CustomersController } from '../controllers/customers.controller';
import { createNewCustomersValidator } from './validators/customers.validator';

export default function defineRoute(app: Application){ 
  const controller : CustomersController= new CustomersController(); 
  const router: Router = Router(); 
    // Create a new Customers 
  router.post('/', [verifyAccess, changeTenant, ...createNewCustomersValidator, validateHeaders] ,controller.create);

    // Retrieve all customers 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout customers
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single Customers with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a Customers with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a Customers with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/customers', router); 
  }; 
