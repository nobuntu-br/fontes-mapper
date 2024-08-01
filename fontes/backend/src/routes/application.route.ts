import { Application, Router } from 'express';
import validateHeaders from './validators/index.validator';
import { ApplicationController } from '../controllers/application.controller';
import { createNewApplicationValidator, findAllApplicationValidator } from './validators/application.validator';

export default function defineRoute(app: Application){ 
  const controller : ApplicationController= new ApplicationController(); 
  const router: Router = Router(); 
    // Create a new Application 
  router.post('/', [...createNewApplicationValidator, validateHeaders] ,controller.create);

    // Retrieve all application 
  router.get('/', [...findAllApplicationValidator, validateHeaders], controller.findAll); 
    // Retrieve cout application
  router.get('/count', controller.getCount); 
    // Retrieve a single Application with id 
  router.get('/:id', controller.findById); 
    // Update a Application with id 
  router.put('/:id', controller.update);

    // Delete a Application with id 
  router.delete('/all', controller.deleteAll); 
    // Custom get Application 
    router.post("/custom", verifyAccess.verifyAccess, application.findCustom);

    app.use('/api/application', router); 
  }; 
