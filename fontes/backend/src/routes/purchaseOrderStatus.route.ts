import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { PurchaseOrderStatusController } from '../controllers/purchaseOrderStatus.controller';
import { createNewPurchaseOrderStatusValidator } from './validators/purchaseOrderStatus.validator';

export default function defineRoute(app: Application){ 
  const controller : PurchaseOrderStatusController= new PurchaseOrderStatusController(); 
  const router: Router = Router(); 
    // Create a new PurchaseOrderStatus 
  router.post('/', [verifyAccess, changeTenant, ...createNewPurchaseOrderStatusValidator, validateHeaders] ,controller.create);

    // Retrieve all purchaseOrderStatus 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout purchaseOrderStatus
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single PurchaseOrderStatus with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a PurchaseOrderStatus with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a PurchaseOrderStatus with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/purchaseOrderStatus', router); 
  }; 
