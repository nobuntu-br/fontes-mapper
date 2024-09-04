import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { CompanyApplicationToken } from "../models/companyApplicationToken.model"; 
import BaseRepository from "./base.repository"; 

export default class CompanyApplicationTokenRepository extends BaseRepository<CompanyApplicationToken>{ 

  constructor(dbType: DbType, model: any){ 
    const _adapter : IDatabaseAdapter<CompanyApplicationToken> = createDbAdapter<CompanyApplicationToken>(dbType, model, CompanyApplicationToken.fromJson); 
    super(_adapter); 
  } 

}
