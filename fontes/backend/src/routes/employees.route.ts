import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { EmployeesController } from '../controllers/employees.controller';
import { createNewEmployeesValidator } from './validators/employees.validator';

export default function defineRoute(app: Application){ 
  const controller : EmployeesController= new EmployeesController(); 
  const router: Router = Router(); 
    // Create a new Employees 
  router.post('/', [verifyAccess, changeTenant, ...createNewEmployeesValidator, validateHeaders] ,controller.create);

    // Retrieve all employees 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout employees
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single Employees with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a Employees with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a Employees with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/employees', router); 
  }; 
