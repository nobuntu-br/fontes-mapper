import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { PurchaseOrderStatus } from "../models/purchaseOrderStatus.model"; 
import BaseRepository from "./base.repository"; 

export default class PurchaseOrderStatusRepository extends BaseRepository<PurchaseOrderStatus>{ 

  constructor(dbType: DbType, model: any){ 
    const _adapter : IDatabaseAdapter<PurchaseOrderStatus> = createDbAdapter<PurchaseOrderStatus>(dbType, model, PurchaseOrderStatus.fromJson); 
    super(_adapter); 
  } 

}
