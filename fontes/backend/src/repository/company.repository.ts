import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { Company } from "../models/company.model"; 
import BaseRepository from "./base.repository"; 

export default class CompanyRepository extends BaseRepository<Company>{ 

  constructor(dbType: DbType, model: any){ 
    const _adapter : IDatabaseAdapter<Company> = createDbAdapter<Company>(dbType, model, Company.fromJson); 
    super(_adapter); 
  } 

}
