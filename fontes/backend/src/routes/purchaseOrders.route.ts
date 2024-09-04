import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { PurchaseOrdersController } from '../controllers/purchaseOrders.controller';
import { createNewPurchaseOrdersValidator } from './validators/purchaseOrders.validator';

export default function defineRoute(app: Application){ 
  const controller : PurchaseOrdersController= new PurchaseOrdersController(); 
  const router: Router = Router(); 
    // Create a new PurchaseOrders 
  router.post('/', [verifyAccess, changeTenant, ...createNewPurchaseOrdersValidator, validateHeaders] ,controller.create);

    // Retrieve all purchaseOrders 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout purchaseOrders
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single PurchaseOrders with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a PurchaseOrders with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a PurchaseOrders with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/purchaseOrders', router); 
  }; 
