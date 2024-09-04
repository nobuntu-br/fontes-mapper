import { DbType } from "../adapters/createDb.adapter";
import { TenantCredential } from "../models/tenantCredential.model";
import InventoryTransactionsRepository from "../repository/inventoryTransactions.repository";
import { InventoryTransactions } from "../models/inventoryTransactions.model"; 
import BaseService from "./base.service";

export class InventoryTransactionsService extends BaseService<InventoryTransactions>{

  constructor(dbType: DbType, model: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : InventoryTransactionsRepository = new InventoryTransactionsRepository(dbType, model); 
    super(repository, dbType, model); 
  } 

}
