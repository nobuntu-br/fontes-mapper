import { Application, Router } from 'express';
import validateHeaders from './validators/index.validator';
import { SalesReportsController } from '../controllers/salesReports.controller';
import { createNewSalesReportsValidator, findAllSalesReportsValidator } from './validators/salesReports.validator';

export default function defineRoute(app: Application){ 
  const controller : SalesReportsController= new SalesReportsController(); 
  const router: Router = Router(); 
    // Create a new SalesReports 
  router.post('/', [...createNewSalesReportsValidator, validateHeaders] ,controller.create);

    // Retrieve all salesReports 
  router.get('/', [...findAllSalesReportsValidator, validateHeaders], controller.findAll); 
    // Retrieve cout salesReports
  router.get('/count', controller.getCount); 
    // Retrieve a single SalesReports with id 
  router.get('/:id', controller.findById); 
    // Update a SalesReports with id 
  router.put('/:id', controller.update);

    // Delete a SalesReports with id 
  router.delete('/all', controller.delete); 

    app.use('/api/salesReports', router); 
  }; 
