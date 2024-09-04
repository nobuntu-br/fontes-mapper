import { DbType } from "../adapters/createDb.adapter";
import { TenantCredential } from "../models/tenantCredential.model";
import InvoicesRepository from "../repository/invoices.repository";
import { Invoices } from "../models/invoices.model"; 
import BaseService from "./base.service";

export class InvoicesService extends BaseService<Invoices>{

  constructor(dbType: DbType, model: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : InvoicesRepository = new InvoicesRepository(dbType, model); 
    super(repository, dbType, model); 
  } 

}
