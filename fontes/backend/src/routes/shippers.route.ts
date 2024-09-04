import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { ShippersController } from '../controllers/shippers.controller';
import { createNewShippersValidator } from './validators/shippers.validator';

export default function defineRoute(app: Application){ 
  const controller : ShippersController= new ShippersController(); 
  const router: Router = Router(); 
    // Create a new Shippers 
  router.post('/', [verifyAccess, changeTenant, ...createNewShippersValidator, validateHeaders] ,controller.create);

    // Retrieve all shippers 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout shippers
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single Shippers with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a Shippers with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a Shippers with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/shippers', router); 
  }; 
