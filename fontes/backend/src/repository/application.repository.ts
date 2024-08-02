import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { Application } from "../models/application.model"; 
import BaseRepository from "./base.repository"; 

export default class ApplicationRepository extends BaseRepository<Application>{ 

  constructor(dbType: DbType, model: any){ 
    const _adapter : IDatabaseAdapter<Application> = createDbAdapter<Application>(dbType, model, Application.fromJson); 
    super(_adapter); 
  } 

}
