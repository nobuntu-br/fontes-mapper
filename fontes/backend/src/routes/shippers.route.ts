import { Application, Router } from 'express';
import validateHeaders from './validators/index.validator';
import { ShippersController } from '../controllers/shippers.controller';
import { createNewShippersValidator, findAllShippersValidator } from './validators/shippers.validator';

export default function defineRoute(app: Application){ 
  const controller : ShippersController= new ShippersController(); 
  const router: Router = Router(); 
    // Create a new Shippers 
  router.post('/', [...createNewShippersValidator, validateHeaders] ,controller.create);

    // Retrieve all shippers 
  router.get('/', [...findAllShippersValidator, validateHeaders], controller.findAll); 
    // Retrieve cout shippers
  router.get('/count', controller.getCount); 
    // Retrieve a single Shippers with id 
  router.get('/:id', controller.findById); 
    // Update a Shippers with id 
  router.put('/:id', controller.update);

    // Delete a Shippers with id 
  router.delete('/all', controller.delete); 

    app.use('/api/shippers', router); 
  }; 
