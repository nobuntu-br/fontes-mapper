import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { Customers } from "../models/customers.model"; 
import BaseRepository from "./base.repository"; 

export default class CustomersRepository extends BaseRepository<Customers>{ 

  constructor(dbType: DbType, model: any){ 
    const _adapter : IDatabaseAdapter<Customers> = createDbAdapter<Customers>(dbType, model, Customers.fromJson); 
    super(_adapter); 
  } 

}
