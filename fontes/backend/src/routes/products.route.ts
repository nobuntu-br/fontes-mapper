import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { ProductsController } from '../controllers/products.controller';
import { createNewProductsValidator } from './validators/products.validator';

export default function defineRoute(app: Application){ 
  const controller : ProductsController= new ProductsController(); 
  const router: Router = Router(); 
    // Create a new Products 
  router.post('/', [verifyAccess, changeTenant, ...createNewProductsValidator, validateHeaders] ,controller.create);

    // Retrieve all products 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout products
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single Products with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a Products with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a Products with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/products', router); 
  }; 
