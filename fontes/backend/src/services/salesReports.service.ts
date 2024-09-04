import { DbType } from "../adapters/createDb.adapter";
import { TenantCredential } from "../models/tenantCredential.model";
import SalesReportsRepository from "../repository/salesReports.repository";
import { SalesReports } from "../models/salesReports.model"; 
import BaseService from "./base.service";

export class SalesReportsService extends BaseService<SalesReports>{

  constructor(dbType: DbType, model: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : SalesReportsRepository = new SalesReportsRepository(dbType, model); 
    super(repository, dbType, model); 
  } 

}
