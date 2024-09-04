import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { PurchaseOrderDetailsController } from '../controllers/purchaseOrderDetails.controller';
import { createNewPurchaseOrderDetailsValidator } from './validators/purchaseOrderDetails.validator';

export default function defineRoute(app: Application){ 
  const controller : PurchaseOrderDetailsController= new PurchaseOrderDetailsController(); 
  const router: Router = Router(); 
    // Create a new PurchaseOrderDetails 
  router.post('/', [verifyAccess, changeTenant, ...createNewPurchaseOrderDetailsValidator, validateHeaders] ,controller.create);

    // Retrieve all purchaseOrderDetails 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout purchaseOrderDetails
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single PurchaseOrderDetails with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a PurchaseOrderDetails with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a PurchaseOrderDetails with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/purchaseOrderDetails', router); 
  }; 
