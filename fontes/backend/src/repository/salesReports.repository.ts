import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { SalesReports } from "../models/salesReports.model"; 
import BaseRepository from "./base.repository"; 

export default class SalesReportsRepository extends BaseRepository<SalesReports>{ 

  constructor(dbType: DbType, model: any){ 
    const _adapter : IDatabaseAdapter<SalesReports> = createDbAdapter<SalesReports>(dbType, model, SalesReports.fromJson); 
    super(_adapter); 
  } 

}
