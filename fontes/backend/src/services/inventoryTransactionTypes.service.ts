import { DbType } from "../adapters/createDb.adapter";
import { TenantCredential } from "../models/tenantCredential.model";
import InventoryTransactionTypesRepository from "../repository/inventoryTransactionTypes.repository";
import BaseService from "./base.service";

  constructor(dbType: DbType, model: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : InventoryTransactionTypesRepository = new InventoryTransactionTypesRepository(dbType, model); 
    super(repository, dbType, model); 
  } 

}
