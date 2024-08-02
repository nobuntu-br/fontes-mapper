import { Application, Router } from 'express';
import validateHeaders from './validators/index.validator';
import { StringsController } from '../controllers/strings.controller';
import { createNewStringsValidator, findAllStringsValidator } from './validators/strings.validator';

export default function defineRoute(app: Application){ 
  const controller : StringsController= new StringsController(); 
  const router: Router = Router(); 
    // Create a new Strings 
  router.post('/', [...createNewStringsValidator, validateHeaders] ,controller.create);

    // Retrieve all strings 
  router.get('/', [...findAllStringsValidator, validateHeaders], controller.findAll); 
    // Retrieve cout strings
  router.get('/count', controller.getCount); 
    // Retrieve a single Strings with id 
  router.get('/:id', controller.findById); 
    // Update a Strings with id 
  router.put('/:id', controller.update);

    // Delete a Strings with id 
  router.delete('/all', controller.delete); 

    app.use('/api/strings', router); 
  }; 
