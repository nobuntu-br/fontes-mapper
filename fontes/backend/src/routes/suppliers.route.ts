import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { SuppliersController } from '../controllers/suppliers.controller';
import { createNewSuppliersValidator } from './validators/suppliers.validator';

export default function defineRoute(app: Application){ 
  const controller : SuppliersController= new SuppliersController(); 
  const router: Router = Router(); 
    // Create a new Suppliers 
  router.post('/', [verifyAccess, changeTenant, ...createNewSuppliersValidator, validateHeaders] ,controller.create);

    // Retrieve all suppliers 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout suppliers
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single Suppliers with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a Suppliers with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a Suppliers with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/suppliers', router); 
  }; 
