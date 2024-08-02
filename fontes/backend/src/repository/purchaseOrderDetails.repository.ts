import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { PurchaseOrderDetails } from "../models/purchaseOrderDetails.model"; 
import BaseRepository from "./base.repository"; 

export default class PurchaseOrderDetailsRepository extends BaseRepository<PurchaseOrderDetails>{ 

  constructor(dbType: DbType, model: any){ 
    const _adapter : IDatabaseAdapter<PurchaseOrderDetails> = createDbAdapter<PurchaseOrderDetails>(dbType, model, PurchaseOrderDetails.fromJson); 
    super(_adapter); 
  } 

}
