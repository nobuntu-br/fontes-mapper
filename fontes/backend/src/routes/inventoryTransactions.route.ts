import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { InventoryTransactionsController } from '../controllers/inventoryTransactions.controller';
import { createNewInventoryTransactionsValidator } from './validators/inventoryTransactions.validator';

export default function defineRoute(app: Application){ 
  const controller : InventoryTransactionsController= new InventoryTransactionsController(); 
  const router: Router = Router(); 
    // Create a new InventoryTransactions 
  router.post('/', [verifyAccess, changeTenant, ...createNewInventoryTransactionsValidator, validateHeaders] ,controller.create);

    // Retrieve all inventoryTransaction 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout inventoryTransaction
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single InventoryTransactions with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a InventoryTransactions with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a InventoryTransactions with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/inventoryTransaction', router); 
  }; 
