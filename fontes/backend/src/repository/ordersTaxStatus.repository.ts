import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { OrdersTaxStatus } from "../models/ordersTaxStatus.model"; 
import BaseRepository from "./base.repository"; 

export default class OrdersTaxStatusRepository extends BaseRepository<OrdersTaxStatus>{ 

  constructor(dbType: DbType, model: any){ 
    const _adapter : IDatabaseAdapter<OrdersTaxStatus> = createDbAdapter<OrdersTaxStatus>(dbType, model, OrdersTaxStatus.fromJson); 
    super(_adapter); 
  } 

}
