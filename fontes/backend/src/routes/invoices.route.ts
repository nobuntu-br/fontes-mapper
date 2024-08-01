import { Application, Router } from 'express';
import validateHeaders from './validators/index.validator';
import { InvoicesController } from '../controllers/invoices.controller';
import { createNewInvoicesValidator, findAllInvoicesValidator } from './validators/invoices.validator';

export default function defineRoute(app: Application){ 
  const controller : InvoicesController= new InvoicesController(); 
  const router: Router = Router(); 
    // Create a new Invoices 
  router.post('/', [...createNewInvoicesValidator, validateHeaders] ,controller.create);

    // Retrieve all invoices 
  router.get('/', [...findAllInvoicesValidator, validateHeaders], controller.findAll); 
    // Retrieve cout invoices
  router.get('/count', controller.getCount); 
    // Retrieve a single Invoices with id 
  router.get('/:id', controller.findById); 
    // Update a Invoices with id 
  router.put('/:id', controller.update);

    // Delete a Invoices with id 
  router.delete('/all', controller.deleteAll); 
    // Custom get Invoices 
    router.post("/custom", verifyAccess.verifyAccess, invoices.findCustom);

    app.use('/api/invoices', router); 
  }; 
