import { DbType } from "../adapters/createDb.adapter";
import { TenantCredential } from "../models/tenantCredential.model";
import CompanyApplicationTokenRepository from "../repository/companyApplicationToken.repository";
import BaseService from "./base.service";

export class CompanyApplicationTokenService extends BaseService<CompanyApplicationToken>{

  constructor(dbType: DbType, model: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : CompanyApplicationTokenRepository = new CompanyApplicationTokenRepository(dbType, model); 
    super(repository, dbType, model); 
  } 

}
