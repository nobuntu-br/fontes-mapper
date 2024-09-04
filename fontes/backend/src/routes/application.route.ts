import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { ApplicationController } from '../controllers/application.controller';
import { createNewApplicationValidator } from './validators/application.validator';

export default function defineRoute(app: Application){ 
  const controller : ApplicationController= new ApplicationController(); 
  const router: Router = Router(); 
    // Create a new Application 
  router.post('/', [verifyAccess, changeTenant, ...createNewApplicationValidator, validateHeaders] ,controller.create);

    // Retrieve all application 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout application
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single Application with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a Application with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a Application with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/application', router); 
  }; 
