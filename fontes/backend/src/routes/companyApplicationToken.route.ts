import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { CompanyApplicationTokenController } from '../controllers/companyApplicationToken.controller';
import { createNewCompanyApplicationTokenValidator } from './validators/companyApplicationToken.validator';

export default function defineRoute(app: Application){ 
  const controller : CompanyApplicationTokenController= new CompanyApplicationTokenController(); 
  const router: Router = Router(); 
    // Create a new CompanyApplicationToken 
  router.post('/', [verifyAccess, changeTenant, ...createNewCompanyApplicationTokenValidator, validateHeaders] ,controller.create);

    // Retrieve all companyApplicationToken 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout companyApplicationToken
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single CompanyApplicationToken with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a CompanyApplicationToken with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a CompanyApplicationToken with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/companyApplicationToken', router); 
  }; 
