import { DbType } from "../adapters/createDb.adapter";
import { TenantCredential } from "../models/tenantCredential.model";
import StringsRepository from "../repository/strings.repository";
import BaseService from "./base.service";

export class StringsService extends BaseService<Strings>{

  constructor(dbType: DbType, model: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : StringsRepository = new StringsRepository(dbType, model); 
    super(repository, dbType, model); 
  } 

}
