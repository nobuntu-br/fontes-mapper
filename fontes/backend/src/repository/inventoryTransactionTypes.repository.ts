import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { InventoryTransactionTypes } from "../models/inventoryTransactionTypes.model"; 
import BaseRepository from "./base.repository"; 

export default class InventoryTransactionTypesRepository extends BaseRepository<InventoryTransactionTypes>{ 

  constructor(dbType: DbType, model: any){ 
    const _adapter : IDatabaseAdapter<InventoryTransactionTypes> = createDbAdapter<InventoryTransactionTypes>(dbType, model, InventoryTransactionTypes.fromJson); 
    super(_adapter); 
  } 

}
