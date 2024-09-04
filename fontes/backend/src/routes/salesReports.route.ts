import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { SalesReportsController } from '../controllers/salesReports.controller';
import { createNewSalesReportsValidator } from './validators/salesReports.validator';

export default function defineRoute(app: Application){ 
  const controller : SalesReportsController= new SalesReportsController(); 
  const router: Router = Router(); 
    // Create a new SalesReports 
  router.post('/', [verifyAccess, changeTenant, ...createNewSalesReportsValidator, validateHeaders] ,controller.create);

    // Retrieve all salesReports 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout salesReports
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single SalesReports with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a SalesReports with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a SalesReports with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/salesReports', router); 
  }; 
