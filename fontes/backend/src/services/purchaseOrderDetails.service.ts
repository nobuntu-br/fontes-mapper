import { DbType } from "../adapters/createDb.adapter";
import { TenantCredential } from "../models/tenantCredential.model";
import PurchaseOrderDetailsRepository from "../repository/purchaseOrderDetails.repository";
import { PurchaseOrderDetails } from "../models/purchaseOrderDetails.model"; 
import BaseService from "./base.service";

export class PurchaseOrderDetailsService extends BaseService<PurchaseOrderDetails>{

  constructor(dbType: DbType, model: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : PurchaseOrderDetailsRepository = new PurchaseOrderDetailsRepository(dbType, model); 
    super(repository, dbType, model); 
  } 

}
