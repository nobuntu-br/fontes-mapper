import { Application, Router } from 'express';
import validateHeaders from './validators/index.validator';
import { InventoryTransactionTypesController } from '../controllers/inventoryTransactionTypes.controller';
import { createNewInventoryTransactionTypesValidator, findAllInventoryTransactionTypesValidator } from './validators/inventoryTransactionTypes.validator';

export default function defineRoute(app: Application){ 
  const controller : InventoryTransactionTypesController= new InventoryTransactionTypesController(); 
  const router: Router = Router(); 
    // Create a new InventoryTransactionTypes 
  router.post('/', [...createNewInventoryTransactionTypesValidator, validateHeaders] ,controller.create);

    // Retrieve all inventoryTransactionTypes 
  router.get('/', [...findAllInventoryTransactionTypesValidator, validateHeaders], controller.findAll); 
    // Retrieve cout inventoryTransactionTypes
  router.get('/count', controller.getCount); 
    // Retrieve a single InventoryTransactionTypes with id 
  router.get('/:id', controller.findById); 
    // Update a InventoryTransactionTypes with id 
  router.put('/:id', controller.update);

    // Delete a InventoryTransactionTypes with id 
  router.delete('/all', controller.delete); 

    app.use('/api/inventoryTransactionTypes', router); 
  }; 
