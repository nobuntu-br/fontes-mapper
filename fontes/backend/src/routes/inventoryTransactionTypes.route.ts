import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { InventoryTransactionTypesController } from '../controllers/inventoryTransactionTypes.controller';
import { createNewInventoryTransactionTypesValidator } from './validators/inventoryTransactionTypes.validator';

export default function defineRoute(app: Application){ 
  const controller : InventoryTransactionTypesController= new InventoryTransactionTypesController(); 
  const router: Router = Router(); 
    // Create a new InventoryTransactionTypes 
  router.post('/', [verifyAccess, changeTenant, ...createNewInventoryTransactionTypesValidator, validateHeaders] ,controller.create);

    // Retrieve all inventoryTransactionTypes 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout inventoryTransactionTypes
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single InventoryTransactionTypes with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a InventoryTransactionTypes with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a InventoryTransactionTypes with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/inventoryTransactionTypes', router); 
  }; 
