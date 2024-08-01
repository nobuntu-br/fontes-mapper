import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { PurchaseOrderDetailsService } from "../services/purchaseOrderDetails.service";

export class PurchaseOrderDetailsController { 

  async create(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  purchaseOrderDetailsService : PurchaseOrderDetailsService = new PurchaseOrderDetailsService(req.body.databaseConnection.dbType, req.body.databaseConnection. purchaseOrderDetails); 
    const baseController : BaseController<PurchaseOrderDetails> = new BaseController(  purchaseOrderDetailsService, " purchaseOrderDetails"); 

    baseController.create(req, res); 
  } 

  async findAll(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  purchaseOrderDetailsService : PurchaseOrderDetailsService = new PurchaseOrderDetailsService(req.body.databaseConnection.dbType, req.body.databaseConnection. purchaseOrderDetails);

    const baseController : BaseController<PurchaseOrderDetails> = new BaseController(  purchaseOrderDetailsService, " purchaseOrderDetails"); 

    baseController.findAll(req, res); 
  } 

  async findById(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  purchaseOrderDetailsService : PurchaseOrderDetailsService = new PurchaseOrderDetailsService(req.body.databaseConnection.dbType, req.body.databaseConnection. purchaseOrderDetails);

    const baseController : BaseController<PurchaseOrderDetails> = new BaseController(  purchaseOrderDetailsService, " purchaseOrderDetails"); 

    baseController.findById(req, res); 
  } 

  async update(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  purchaseOrderDetailsService : PurchaseOrderDetailsService = new PurchaseOrderDetailsService(req.body.databaseConnection.dbType, req.body.databaseConnection. purchaseOrderDetails);

    const baseController : BaseController<PurchaseOrderDetails> = new BaseController(  purchaseOrderDetailsService, " purchaseOrderDetails"); 

    baseController.update(req, res); 
  } 

  async getCount(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  purchaseOrderDetailsService : PurchaseOrderDetailsService = new PurchaseOrderDetailsService(req.body.databaseConnection.dbType, req.body.databaseConnection. purchaseOrderDetails);

    const baseController : BaseController<PurchaseOrderDetails> = new BaseController(  purchaseOrderDetailsService, " purchaseOrderDetails"); 

    baseController.getCount(req, res); 
  } 

  async delete(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  purchaseOrderDetailsService : PurchaseOrderDetailsService = new PurchaseOrderDetailsService(req.body.databaseConnection.dbType, req.body.databaseConnection. purchaseOrderDetails);

    const baseController : BaseController<PurchaseOrderDetails> = new BaseController(  purchaseOrderDetailsService, " purchaseOrderDetails"); 

    baseController.delete(req, res); 
  } 
}
