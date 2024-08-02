import { Application, Router } from 'express';
import validateHeaders from './validators/index.validator';
import { PurchaseOrderStatusController } from '../controllers/purchaseOrderStatus.controller';
import { createNewPurchaseOrderStatusValidator, findAllPurchaseOrderStatusValidator } from './validators/purchaseOrderStatus.validator';

export default function defineRoute(app: Application){ 
  const controller : PurchaseOrderStatusController= new PurchaseOrderStatusController(); 
  const router: Router = Router(); 
    // Create a new PurchaseOrderStatus 
  router.post('/', [...createNewPurchaseOrderStatusValidator, validateHeaders] ,controller.create);

    // Retrieve all purchaseOrderStatus 
  router.get('/', [...findAllPurchaseOrderStatusValidator, validateHeaders], controller.findAll); 
    // Retrieve cout purchaseOrderStatus
  router.get('/count', controller.getCount); 
    // Retrieve a single PurchaseOrderStatus with id 
  router.get('/:id', controller.findById); 
    // Update a PurchaseOrderStatus with id 
  router.put('/:id', controller.update);

    // Delete a PurchaseOrderStatus with id 
  router.delete('/all', controller.delete); 

    app.use('/api/purchaseOrderStatus', router); 
  }; 
