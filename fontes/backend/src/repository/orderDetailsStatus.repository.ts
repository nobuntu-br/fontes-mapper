import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { OrderDetailsStatus } from "../models/orderDetailsStatus.model"; 
import BaseRepository from "./base.repository"; 

export default class OrderDetailsStatusRepository extends BaseRepository<OrderDetailsStatus>{ 

  constructor(dbType: DbType, model: any){ 
    const _adapter : IDatabaseAdapter<OrderDetailsStatus> = createDbAdapter<OrderDetailsStatus>(dbType, model, OrderDetailsStatus.fromJson); 
    super(_adapter); 
  } 

}
