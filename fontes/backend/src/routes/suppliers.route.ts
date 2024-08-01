import { Application, Router } from 'express';
import validateHeaders from './validators/index.validator';
import { SuppliersController } from '../controllers/suppliers.controller';
import { createNewSuppliersValidator, findAllSuppliersValidator } from './validators/suppliers.validator';

export default function defineRoute(app: Application){ 
  const controller : SuppliersController= new SuppliersController(); 
  const router: Router = Router(); 
    // Create a new Suppliers 
  router.post('/', [...createNewSuppliersValidator, validateHeaders] ,controller.create);

    // Retrieve all suppliers 
  router.get('/', [...findAllSuppliersValidator, validateHeaders], controller.findAll); 
    // Retrieve cout suppliers
  router.get('/count', controller.getCount); 
    // Retrieve a single Suppliers with id 
  router.get('/:id', controller.findById); 
    // Update a Suppliers with id 
  router.put('/:id', controller.update);

    // Delete a Suppliers with id 
  router.delete('/all', controller.deleteAll); 
    // Custom get Suppliers 
    router.post("/custom", verifyAccess.verifyAccess, suppliers.findCustom);

    app.use('/api/suppliers', router); 
  }; 
