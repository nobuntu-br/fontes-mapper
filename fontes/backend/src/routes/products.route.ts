import { Application, Router } from 'express';
import validateHeaders from './validators/index.validator';
import { ProductsController } from '../controllers/products.controller';
import { createNewProductsValidator, findAllProductsValidator } from './validators/products.validator';

export default function defineRoute(app: Application){ 
  const controller : ProductsController= new ProductsController(); 
  const router: Router = Router(); 
    // Create a new Products 
  router.post('/', [...createNewProductsValidator, validateHeaders] ,controller.create);

    // Retrieve all products 
  router.get('/', [...findAllProductsValidator, validateHeaders], controller.findAll); 
    // Retrieve cout products
  router.get('/count', controller.getCount); 
    // Retrieve a single Products with id 
  router.get('/:id', controller.findById); 
    // Update a Products with id 
  router.put('/:id', controller.update);

    // Delete a Products with id 
  router.delete('/all', controller.delete); 

    app.use('/api/products', router); 
  }; 
