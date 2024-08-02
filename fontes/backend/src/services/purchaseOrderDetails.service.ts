import { DbType } from "../adapters/createDb.adapter";
import { TenantCredential } from "../models/tenantCredential.model";
import PurchaseOrderDetailsRepository from "../repository/purchaseOrderDetails.repository";
import BaseService from "./base.service";

  constructor(dbType: DbType, model: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : PurchaseOrderDetailsRepository = new PurchaseOrderDetailsRepository(dbType, model); 
    super(repository, dbType, model); 
  } 

}
