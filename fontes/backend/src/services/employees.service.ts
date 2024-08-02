import { DbType } from "../adapters/createDb.adapter";
import { TenantCredential } from "../models/tenantCredential.model";
import EmployeesRepository from "../repository/employees.repository";
import BaseService from "./base.service";

export class EmployeesService extends BaseService<Employees>{

  constructor(dbType: DbType, model: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : EmployeesRepository = new EmployeesRepository(dbType, model); 
    super(repository, dbType, model); 
  } 

}
