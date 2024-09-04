import { DbType } from "../adapters/createDb.adapter";
import { TenantCredential } from "../models/tenantCredential.model";
import CompanyRepository from "../repository/company.repository";
import { Company } from "../models/company.model"; 
import BaseService from "./base.service";

export class CompanyService extends BaseService<Company>{

  constructor(dbType: DbType, model: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : CompanyRepository = new CompanyRepository(dbType, model); 
    super(repository, dbType, model); 
  } 

}
