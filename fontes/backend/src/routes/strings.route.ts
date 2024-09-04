import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { StringsController } from '../controllers/strings.controller';
import { createNewStringsValidator } from './validators/strings.validator';

export default function defineRoute(app: Application){ 
  const controller : StringsController= new StringsController(); 
  const router: Router = Router(); 
    // Create a new Strings 
  router.post('/', [verifyAccess, changeTenant, ...createNewStringsValidator, validateHeaders] ,controller.create);

    // Retrieve all strings 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout strings
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single Strings with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a Strings with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a Strings with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/strings', router); 
  }; 
