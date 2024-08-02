import { DbType } from "../adapters/createDb.adapter";
import { TenantCredential } from "../models/tenantCredential.model";
import ProductsRepository from "../repository/products.repository";
import BaseService from "./base.service";

  constructor(dbType: DbType, model: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : ProductsRepository = new ProductsRepository(dbType, model); 
    super(repository, dbType, model); 
  } 

}
