import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { Invoices } from "../models/invoices.model"; 
import BaseRepository from "./base.repository"; 

export default class InvoicesRepository extends BaseRepository<Invoices>{ 

  constructor(dbType: DbType, model: any){ 
    const _adapter : IDatabaseAdapter<Invoices> = createDbAdapter<Invoices>(dbType, model, Invoices.fromJson); 
    super(_adapter); 
  } 

}
