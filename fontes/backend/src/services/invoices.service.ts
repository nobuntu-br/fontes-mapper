import { DbType } from "../adapters/createDb.adapter";
import { TenantCredential } from "../models/tenantCredential.model";
import InvoicesRepository from "../repository/invoices.repository";
import BaseService from "./base.service";

  constructor(dbType: DbType, model: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : InvoicesRepository = new InvoicesRepository(dbType, model); 
    super(repository, dbType, model); 
  } 

}
