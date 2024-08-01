import { Application, Router } from 'express';
import { TenantController } from '../controllers/tenant.controller';
import { createNewTenantValidator, findAllTenantValidator } from './validators/tenant.validator';
import validateHeaders from './validators/index.validator';

export default function defineRoute(app: Application){
  const controller : TenantController = new TenantController();
  const router: Router = Router();
  
  //Create a new
  router.post('/', [...createNewTenantValidator, validateHeaders] ,controller.create);
  //Find all
  router.get('/', [...findAllTenantValidator, validateHeaders], controller.findAll);
  //Find count
  router.get('/count', controller.getCount);
  //Find by id
  router.get('/:id', controller.findById);
  //Update
  router.put('/:id', controller.update);
  //Delete all
  router.delete('/all', controller.deleteAll);
  //Delete
  router.delete('/:id', controller.delete);
    
  //TODO adicionar rota de pegar item de forma paginada
  
  app.use('/api/tenant', router);
} 
