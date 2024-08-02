import { DbType } from "../adapters/createDb.adapter";
import { TenantCredential } from "../models/tenantCredential.model";
import ApplicationRepository from "../repository/application.repository";
import BaseService from "./base.service";

  constructor(dbType: DbType, model: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : ApplicationRepository = new ApplicationRepository(dbType, model); 
    super(repository, dbType, model); 
  } 

}
