import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { Employees } from "../models/employees.model"; 
import BaseRepository from "./base.repository"; 

export default class EmployeesRepository extends BaseRepository<Employees>{ 

  constructor(dbType: DbType, model: any){ 
    const _adapter : IDatabaseAdapter<Employees> = createDbAdapter<Employees>(dbType, model, Employees.fromJson); 
    super(_adapter); 
  } 

}
