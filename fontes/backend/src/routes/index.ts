import { Application } from 'express';
import userRoutes from './user.route';
import tenantRoutes from './tenant.route';

/**
 * Define as rotas da aplicação
 * @param app Instância do aplicação Express
 */
export function setRoutes(app: Application) {

  /**
   * Chama função que irá definir quais rotas a aplicação terá
   */
  userRoutes(app);

  tenantRoutes(app);

  //TODO serão gerados esses segmentos pelo mapper

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

}