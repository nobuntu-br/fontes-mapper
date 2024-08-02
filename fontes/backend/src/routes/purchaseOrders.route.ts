import { Application, Router } from 'express';
import validateHeaders from './validators/index.validator';
import { PurchaseOrdersController } from '../controllers/purchaseOrders.controller';
import { createNewPurchaseOrdersValidator, findAllPurchaseOrdersValidator } from './validators/purchaseOrders.validator';

export default function defineRoute(app: Application){ 
  const controller : PurchaseOrdersController= new PurchaseOrdersController(); 
  const router: Router = Router(); 
    // Create a new PurchaseOrders 
  router.post('/', [...createNewPurchaseOrdersValidator, validateHeaders] ,controller.create);

    // Retrieve all purchaseOrders 
  router.get('/', [...findAllPurchaseOrdersValidator, validateHeaders], controller.findAll); 
    // Retrieve cout purchaseOrders
  router.get('/count', controller.getCount); 
    // Retrieve a single PurchaseOrders with id 
  router.get('/:id', controller.findById); 
    // Update a PurchaseOrders with id 
  router.put('/:id', controller.update);

    // Delete a PurchaseOrders with id 
  router.delete('/all', controller.delete); 

    app.use('/api/purchaseOrders', router); 
  }; 
