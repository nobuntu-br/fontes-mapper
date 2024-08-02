import { DbType } from "../adapters/createDb.adapter";
import { TenantCredential } from "../models/tenantCredential.model";
import CompanyRepository from "../repository/company.repository";
import BaseService from "./base.service";

  constructor(dbType: DbType, model: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : CompanyRepository = new CompanyRepository(dbType, model); 
    super(repository, dbType, model); 
  } 

}
