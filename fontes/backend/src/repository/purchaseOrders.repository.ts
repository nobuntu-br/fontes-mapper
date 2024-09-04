import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { PurchaseOrders } from "../models/purchaseOrders.model"; 
import BaseRepository from "./base.repository"; 

export default class PurchaseOrdersRepository extends BaseRepository<PurchaseOrders>{ 

  constructor(dbType: DbType, model: any){ 
    const _adapter : IDatabaseAdapter<PurchaseOrders> = createDbAdapter<PurchaseOrders>(dbType, model, PurchaseOrders.fromJson); 
    super(_adapter); 
  } 

}
