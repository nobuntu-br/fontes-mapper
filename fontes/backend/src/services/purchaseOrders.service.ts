import { DbType } from "../adapters/createDb.adapter";
import { TenantCredential } from "../models/tenantCredential.model";
import PurchaseOrdersRepository from "../repository/purchaseOrders.repository";
import { PurchaseOrders } from "../models/purchaseOrders.model"; 
import BaseService from "./base.service";

export class PurchaseOrdersService extends BaseService<PurchaseOrders>{

  constructor(dbType: DbType, model: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : PurchaseOrdersRepository = new PurchaseOrdersRepository(dbType, model); 
    super(repository, dbType, model); 
  } 

}
