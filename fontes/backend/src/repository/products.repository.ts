import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { Products } from "../models/products.model"; 
import BaseRepository from "./base.repository"; 

export default class ProductsRepository extends BaseRepository<Products>{ 

  constructor(dbType: DbType, model: any){ 
    const _adapter : IDatabaseAdapter<Products> = createDbAdapter<Products>(dbType, model, Products.fromJson); 
    super(_adapter); 
  } 

}
