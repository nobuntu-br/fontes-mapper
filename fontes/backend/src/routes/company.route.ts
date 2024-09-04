import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { CompanyController } from '../controllers/company.controller';
import { createNewCompanyValidator } from './validators/company.validator';

export default function defineRoute(app: Application){ 
  const controller : CompanyController= new CompanyController(); 
  const router: Router = Router(); 
    // Create a new Company 
  router.post('/', [verifyAccess, changeTenant, ...createNewCompanyValidator, validateHeaders] ,controller.create);

    // Retrieve all company 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout company
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single Company with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a Company with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a Company with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/company', router); 
  }; 
