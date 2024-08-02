import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { PurchaseOrderStatus } from "../models/purchaseOrderStatus.model"; 
import { PurchaseOrderStatusService } from "../services/purchaseOrderStatus.service";

export class PurchaseOrderStatusController { 

  async create(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  purchaseOrderStatusService : PurchaseOrderStatusService = new PurchaseOrderStatusService(req.body.databaseConnection.dbType, req.body.databaseConnection. purchaseOrderStatus); 
    const baseController : BaseController<PurchaseOrderStatus> = new BaseController(  purchaseOrderStatusService, " purchaseOrderStatus"); 

    baseController.create(req, res); 
  } 

  async findAll(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  purchaseOrderStatusService : PurchaseOrderStatusService = new PurchaseOrderStatusService(req.body.databaseConnection.dbType, req.body.databaseConnection. purchaseOrderStatus);

    const baseController : BaseController<PurchaseOrderStatus> = new BaseController(  purchaseOrderStatusService, " purchaseOrderStatus"); 

    baseController.findAll(req, res); 
  } 

  async findById(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  purchaseOrderStatusService : PurchaseOrderStatusService = new PurchaseOrderStatusService(req.body.databaseConnection.dbType, req.body.databaseConnection. purchaseOrderStatus);

    const baseController : BaseController<PurchaseOrderStatus> = new BaseController(  purchaseOrderStatusService, " purchaseOrderStatus"); 

    baseController.findById(req, res); 
  } 

  async update(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  purchaseOrderStatusService : PurchaseOrderStatusService = new PurchaseOrderStatusService(req.body.databaseConnection.dbType, req.body.databaseConnection. purchaseOrderStatus);

    const baseController : BaseController<PurchaseOrderStatus> = new BaseController(  purchaseOrderStatusService, " purchaseOrderStatus"); 

    baseController.update(req, res); 
  } 

  async getCount(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  purchaseOrderStatusService : PurchaseOrderStatusService = new PurchaseOrderStatusService(req.body.databaseConnection.dbType, req.body.databaseConnection. purchaseOrderStatus);

    const baseController : BaseController<PurchaseOrderStatus> = new BaseController(  purchaseOrderStatusService, " purchaseOrderStatus"); 

    baseController.getCount(req, res); 
  } 

  async delete(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  purchaseOrderStatusService : PurchaseOrderStatusService = new PurchaseOrderStatusService(req.body.databaseConnection.dbType, req.body.databaseConnection. purchaseOrderStatus);

    const baseController : BaseController<PurchaseOrderStatus> = new BaseController(  purchaseOrderStatusService, " purchaseOrderStatus"); 

    baseController.delete(req, res); 
  } 
}
