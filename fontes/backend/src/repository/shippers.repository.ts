import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { Shippers } from "../models/shippers.model"; 
import BaseRepository from "./base.repository"; 

export default class ShippersRepository extends BaseRepository<Shippers>{ 

  constructor(dbType: DbType, model: any){ 
    const _adapter : IDatabaseAdapter<Shippers> = createDbAdapter<Shippers>(dbType, model, Shippers.fromJson); 
    super(_adapter); 
  } 

}
