import { DbType } from "../adapters/createDb.adapter";
import { TenantCredential } from "../models/tenantCredential.model";
import SuppliersRepository from "../repository/suppliers.repository";
import { Suppliers } from "../models/suppliers.model"; 
import BaseService from "./base.service";

export class SuppliersService extends BaseService<Suppliers>{

  constructor(dbType: DbType, model: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : SuppliersRepository = new SuppliersRepository(dbType, model); 
    super(repository, dbType, model); 
  } 

}
