import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { InvoicesController } from '../controllers/invoices.controller';
import { createNewInvoicesValidator } from './validators/invoices.validator';

export default function defineRoute(app: Application){ 
  const controller : InvoicesController= new InvoicesController(); 
  const router: Router = Router(); 
    // Create a new Invoices 
  router.post('/', [verifyAccess, changeTenant, ...createNewInvoicesValidator, validateHeaders] ,controller.create);

    // Retrieve all invoices 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout invoices
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single Invoices with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a Invoices with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a Invoices with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/invoices', router); 
  }; 
