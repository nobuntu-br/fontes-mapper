import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { OrdersStatus } from "../models/ordersStatus.model"; 
import BaseRepository from "./base.repository"; 

export default class OrdersStatusRepository extends BaseRepository<OrdersStatus>{ 

  constructor(dbType: DbType, model: any){ 
    const _adapter : IDatabaseAdapter<OrdersStatus> = createDbAdapter<OrdersStatus>(dbType, model, OrdersStatus.fromJson); 
    super(_adapter); 
  } 

}
