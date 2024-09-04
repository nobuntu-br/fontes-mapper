import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { Strings } from "../models/strings.model"; 
import BaseRepository from "./base.repository"; 

export default class StringsRepository extends BaseRepository<Strings>{ 

  constructor(dbType: DbType, model: any){ 
    const _adapter : IDatabaseAdapter<Strings> = createDbAdapter<Strings>(dbType, model, Strings.fromJson); 
    super(_adapter); 
  } 

}
