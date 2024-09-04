import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { InventoryTransactions } from "../models/inventoryTransactions.model"; 
import BaseRepository from "./base.repository"; 

export default class InventoryTransactionsRepository extends BaseRepository<InventoryTransactions>{ 

  constructor(dbType: DbType, model: any){ 
    const _adapter : IDatabaseAdapter<InventoryTransactions> = createDbAdapter<InventoryTransactions>(dbType, model, InventoryTransactions.fromJson); 
    super(_adapter); 
  } 

}
