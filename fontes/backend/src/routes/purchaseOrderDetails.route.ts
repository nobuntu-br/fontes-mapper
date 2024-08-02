import { Application, Router } from 'express';
import validateHeaders from './validators/index.validator';
import { PurchaseOrderDetailsController } from '../controllers/purchaseOrderDetails.controller';
import { createNewPurchaseOrderDetailsValidator, findAllPurchaseOrderDetailsValidator } from './validators/purchaseOrderDetails.validator';

export default function defineRoute(app: Application){ 
  const controller : PurchaseOrderDetailsController= new PurchaseOrderDetailsController(); 
  const router: Router = Router(); 
    // Create a new PurchaseOrderDetails 
  router.post('/', [...createNewPurchaseOrderDetailsValidator, validateHeaders] ,controller.create);

    // Retrieve all purchaseOrderDetails 
  router.get('/', [...findAllPurchaseOrderDetailsValidator, validateHeaders], controller.findAll); 
    // Retrieve cout purchaseOrderDetails
  router.get('/count', controller.getCount); 
    // Retrieve a single PurchaseOrderDetails with id 
  router.get('/:id', controller.findById); 
    // Update a PurchaseOrderDetails with id 
  router.put('/:id', controller.update);

    // Delete a PurchaseOrderDetails with id 
  router.delete('/all', controller.delete); 

    app.use('/api/purchaseOrderDetails', router); 
  }; 
