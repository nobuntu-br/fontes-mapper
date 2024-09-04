import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { Orders } from "../models/orders.model"; 
import BaseRepository from "./base.repository"; 

export default class OrdersRepository extends BaseRepository<Orders>{ 

  constructor(dbType: DbType, model: any){ 
    const _adapter : IDatabaseAdapter<Orders> = createDbAdapter<Orders>(dbType, model, Orders.fromJson); 
    super(_adapter); 
  } 

}
