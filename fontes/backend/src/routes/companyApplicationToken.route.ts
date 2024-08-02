import { Application, Router } from 'express';
import validateHeaders from './validators/index.validator';
import { CompanyApplicationTokenController } from '../controllers/companyApplicationToken.controller';
import { createNewCompanyApplicationTokenValidator, findAllCompanyApplicationTokenValidator } from './validators/companyApplicationToken.validator';

export default function defineRoute(app: Application){ 
  const controller : CompanyApplicationTokenController= new CompanyApplicationTokenController(); 
  const router: Router = Router(); 
    // Create a new CompanyApplicationToken 
  router.post('/', [...createNewCompanyApplicationTokenValidator, validateHeaders] ,controller.create);

    // Retrieve all companyApplicationToken 
  router.get('/', [...findAllCompanyApplicationTokenValidator, validateHeaders], controller.findAll); 
    // Retrieve cout companyApplicationToken
  router.get('/count', controller.getCount); 
    // Retrieve a single CompanyApplicationToken with id 
  router.get('/:id', controller.findById); 
    // Update a CompanyApplicationToken with id 
  router.put('/:id', controller.update);

    // Delete a CompanyApplicationToken with id 
  router.delete('/all', controller.delete); 

    app.use('/api/companyApplicationToken', router); 
  }; 
