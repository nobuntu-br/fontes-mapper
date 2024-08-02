import { Application, Router } from 'express';
import validateHeaders from './validators/index.validator';
import { InventoryTransactionsController } from '../controllers/inventoryTransactions.controller';
import { createNewInventoryTransactionsValidator, findAllInventoryTransactionsValidator } from './validators/inventoryTransactions.validator';

export default function defineRoute(app: Application){ 
  const controller : InventoryTransactionsController= new InventoryTransactionsController(); 
  const router: Router = Router(); 
    // Create a new InventoryTransactions 
  router.post('/', [...createNewInventoryTransactionsValidator, validateHeaders] ,controller.create);

    // Retrieve all inventoryTransaction 
  router.get('/', [...findAllInventoryTransactionsValidator, validateHeaders], controller.findAll); 
    // Retrieve cout inventoryTransaction
  router.get('/count', controller.getCount); 
    // Retrieve a single InventoryTransactions with id 
  router.get('/:id', controller.findById); 
    // Update a InventoryTransactions with id 
  router.put('/:id', controller.update);

    // Delete a InventoryTransactions with id 
  router.delete('/all', controller.delete); 

    app.use('/api/inventoryTransaction', router); 
  }; 
