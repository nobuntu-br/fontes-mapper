import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { OrderDetails } from "../models/orderDetails.model"; 
import BaseRepository from "./base.repository"; 

export default class OrderDetailsRepository extends BaseRepository<OrderDetails>{ 

  constructor(dbType: DbType, model: any){ 
    const _adapter : IDatabaseAdapter<OrderDetails> = createDbAdapter<OrderDetails>(dbType, model, OrderDetails.fromJson); 
    super(_adapter); 
  } 

}
