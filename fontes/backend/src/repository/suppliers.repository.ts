import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { Suppliers } from "../models/suppliers.model"; 
import BaseRepository from "./base.repository"; 

export default class SuppliersRepository extends BaseRepository<Suppliers>{ 

  constructor(dbType: DbType, model: any){ 
    const _adapter : IDatabaseAdapter<Suppliers> = createDbAdapter<Suppliers>(dbType, model, Suppliers.fromJson); 
    super(_adapter); 
  } 

}
