import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { Products } from "../models/ products.model"; 
import { ProductsService } from "../services/products.service";

export class ProductsController { 

  async create(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  productsService : ProductsService = new ProductsService(req.body.databaseConnection.dbType, req.body.databaseConnection. products); 
    const baseController : BaseController<Products> = new BaseController(  productsService, " products"); 

    baseController.create(req, res); 
  } 

  async findAll(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  productsService : ProductsService = new ProductsService(req.body.databaseConnection.dbType, req.body.databaseConnection. products);

    const baseController : BaseController<Products> = new BaseController(  productsService, " products"); 

    baseController.findAll(req, res); 
  } 

  async findById(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  productsService : ProductsService = new ProductsService(req.body.databaseConnection.dbType, req.body.databaseConnection. products);

    const baseController : BaseController<Products> = new BaseController(  productsService, " products"); 

    baseController.findById(req, res); 
  } 

  async update(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  productsService : ProductsService = new ProductsService(req.body.databaseConnection.dbType, req.body.databaseConnection. products);

    const baseController : BaseController<Products> = new BaseController(  productsService, " products"); 

    baseController.update(req, res); 
  } 

  async getCount(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  productsService : ProductsService = new ProductsService(req.body.databaseConnection.dbType, req.body.databaseConnection. products);

    const baseController : BaseController<Products> = new BaseController(  productsService, " products"); 

    baseController.getCount(req, res); 
  } 

  async delete(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  productsService : ProductsService = new ProductsService(req.body.databaseConnection.dbType, req.body.databaseConnection. products);

    const baseController : BaseController<Products> = new BaseController(  productsService, " products"); 

    baseController.delete(req, res); 
  } 
}
