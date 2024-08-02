import { Application, Router } from 'express';
import validateHeaders from './validators/index.validator';
import { CompanyController } from '../controllers/company.controller';
import { createNewCompanyValidator, findAllCompanyValidator } from './validators/company.validator';

export default function defineRoute(app: Application){ 
  const controller : CompanyController= new CompanyController(); 
  const router: Router = Router(); 
    // Create a new Company 
  router.post('/', [...createNewCompanyValidator, validateHeaders] ,controller.create);

    // Retrieve all company 
  router.get('/', [...findAllCompanyValidator, validateHeaders], controller.findAll); 
    // Retrieve cout company
  router.get('/count', controller.getCount); 
    // Retrieve a single Company with id 
  router.get('/:id', controller.findById); 
    // Update a Company with id 
  router.put('/:id', controller.update);

    // Delete a Company with id 
  router.delete('/all', controller.delete); 

    app.use('/api/company', router); 
  }; 
