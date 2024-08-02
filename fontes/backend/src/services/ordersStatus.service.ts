import { DbType } from "../adapters/createDb.adapter";
import { TenantCredential } from "../models/tenantCredential.model";
import OrdersStatusRepository from "../repository/ordersStatus.repository";
import BaseService from "./base.service";

export class OrdersStatusService extends BaseService<OrdersStatus>{

  constructor(dbType: DbType, model: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : OrdersStatusRepository = new OrdersStatusRepository(dbType, model); 
    super(repository, dbType, model); 
  } 

}
