import { Application, Router } from 'express';
import validateHeaders from './validators/index.validator';
import { EmployeesController } from '../controllers/employees.controller';
import { createNewEmployeesValidator, findAllEmployeesValidator } from './validators/employees.validator';

export default function defineRoute(app: Application){ 
  const controller : EmployeesController= new EmployeesController(); 
  const router: Router = Router(); 
    // Create a new Employees 
  router.post('/', [...createNewEmployeesValidator, validateHeaders] ,controller.create);

    // Retrieve all employees 
  router.get('/', [...findAllEmployeesValidator, validateHeaders], controller.findAll); 
    // Retrieve cout employees
  router.get('/count', controller.getCount); 
    // Retrieve a single Employees with id 
  router.get('/:id', controller.findById); 
    // Update a Employees with id 
  router.put('/:id', controller.update);

    // Delete a Employees with id 
  router.delete('/all', controller.delete); 

    app.use('/api/employees', router); 
  }; 
