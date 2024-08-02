import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { PurchaseOrders } from "../models/ purchaseOrders.model"; 
import { PurchaseOrdersService } from "../services/purchaseOrders.service";

export class PurchaseOrdersController { 

  async create(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  purchaseOrdersService : PurchaseOrdersService = new PurchaseOrdersService(req.body.databaseConnection.dbType, req.body.databaseConnection. purchaseOrders); 
    const baseController : BaseController<PurchaseOrders> = new BaseController(  purchaseOrdersService, " purchaseOrders"); 

    baseController.create(req, res); 
  } 

  async findAll(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  purchaseOrdersService : PurchaseOrdersService = new PurchaseOrdersService(req.body.databaseConnection.dbType, req.body.databaseConnection. purchaseOrders);

    const baseController : BaseController<PurchaseOrders> = new BaseController(  purchaseOrdersService, " purchaseOrders"); 

    baseController.findAll(req, res); 
  } 

  async findById(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  purchaseOrdersService : PurchaseOrdersService = new PurchaseOrdersService(req.body.databaseConnection.dbType, req.body.databaseConnection. purchaseOrders);

    const baseController : BaseController<PurchaseOrders> = new BaseController(  purchaseOrdersService, " purchaseOrders"); 

    baseController.findById(req, res); 
  } 

  async update(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  purchaseOrdersService : PurchaseOrdersService = new PurchaseOrdersService(req.body.databaseConnection.dbType, req.body.databaseConnection. purchaseOrders);

    const baseController : BaseController<PurchaseOrders> = new BaseController(  purchaseOrdersService, " purchaseOrders"); 

    baseController.update(req, res); 
  } 

  async getCount(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  purchaseOrdersService : PurchaseOrdersService = new PurchaseOrdersService(req.body.databaseConnection.dbType, req.body.databaseConnection. purchaseOrders);

    const baseController : BaseController<PurchaseOrders> = new BaseController(  purchaseOrdersService, " purchaseOrders"); 

    baseController.getCount(req, res); 
  } 

  async delete(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  purchaseOrdersService : PurchaseOrdersService = new PurchaseOrdersService(req.body.databaseConnection.dbType, req.body.databaseConnection. purchaseOrders);

    const baseController : BaseController<PurchaseOrders> = new BaseController(  purchaseOrdersService, " purchaseOrders"); 

    baseController.delete(req, res); 
  } 
}
